import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Coffee } from './entity/coffee.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flavor } from './entity/flavor.entity';

@Injectable()
export class CoffeesService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
    @InjectRepository(Flavor)
    private readonly flavorRepository: Repository<Flavor>,
  ) {}

  async findAll() {
    return await this.coffeeRepository.find({
      relations: {
        flavors: true,
      },
    });
  }

  async findOne(id: number) {
    const exist = await this.coffeeRepository.findOne({
      where: { id: +id },
      relations: {
        flavors: true,
      },
    });
    if (!exist) {
      throw new HttpException(
        `Coffee with id ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return exist;
  }

  async create(createCoffeeDto: CreateCoffeeDto) {
    // console.log(createCoffeeDto instanceof CreateCoffeeDto);     // Checking the same type
    const flavors = await Promise.all(
      createCoffeeDto.flavor.map((name) => this.preloadFlavorByName(name)),
    );
    const addCoffee = this.coffeeRepository.create({
      ...createCoffeeDto,
      flavors,
    });
    return this.coffeeRepository.save(addCoffee);
  }

  async update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    const flavors = updateCoffeeDto.flavor && await Promise.all(
      updateCoffeeDto.flavor.map((name) => this.preloadFlavorByName(name)),
    );
    const exist = await this.coffeeRepository.preload({
      id: +id,
      ...updateCoffeeDto,
      flavors
    });
    if (!exist) {
      throw new NotFoundException(`Coffee with id ${id} not found`);
    }
    return this.coffeeRepository.save(exist);
  }

  async remove(id: number) {
    const coffee = await this.findOne(id);
    return this.coffeeRepository.remove(coffee);
  }

  private async preloadFlavorByName(name: string): Promise<Flavor> {
    const existintgFlavor = await this.flavorRepository.findOne({
      where: { name },
    });
    if (existintgFlavor) {
      return existintgFlavor;
    }
    return this.flavorRepository.create({ name });
  }
}
