import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entity/coffee.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Injectable()
export class CoffeesService {
    
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'capachino',
      brand: 'ccd',
      flavor: ['vanialla', 'choclate'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: number) {
    const existing = this.coffees.find(item => item.id === +id);
    if (!existing) {
      throw new HttpException(`Coffee with id ${id} not found`, HttpStatus.NOT_FOUND);
    }
    return existing;
  }

  create(createCoffeeDto: CreateCoffeeDto) {
    console.log(createCoffeeDto instanceof CreateCoffeeDto);     // Checking the same type
    const newCoffee: Coffee = {
      id: this.coffees.length + 1, // generate new id
      ...createCoffeeDto,
    };
    this.coffees.push(newCoffee);
    return newCoffee;
  }

  update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    const coffeeIndex = this.coffees.findIndex(item => item.id === +id);
    if(coffeeIndex === -1){
        throw new NotFoundException(`Coffee with id ${id} not found`);
    }
    this.coffees[coffeeIndex] = { ...this.coffees[coffeeIndex], ...updateCoffeeDto };
    return this.coffees[coffeeIndex];

  }

  remove(id: number) {
    const coffeeIndex = this.coffees.findIndex(item => item.id === +id);
    return this.coffees.splice(coffeeIndex, 1);
  }
}
