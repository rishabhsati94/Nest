import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entity/coffee.entity';

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

  findOne(id: string) {
    const existing =  this.coffees.find(item => item.id === +id);
    if(!existing){
        throw new HttpException(`Not existed`, HttpStatus.NOT_FOUND)
    }
  }

  create(createCoffeeDto: any) {
    return this.coffees.push(createCoffeeDto);
  }

  update(id: string, updateCoffeeDto: any) {
    const coffeeIndex = this.coffees.findIndex(item => item.id === +id);
    if(coffeeIndex === -1){
        throw new NotFoundException(`Coffee with id ${id} not found`);
    }
    this.coffees[coffeeIndex] = { ...this.coffees[coffeeIndex], ...updateCoffeeDto };
    return this.coffees[coffeeIndex];

  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex(item => item.id === +id);
    return this.coffees.splice(coffeeIndex, 1);
  }
}
