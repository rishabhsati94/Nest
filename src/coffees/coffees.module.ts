import { Module } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CoffeesController } from './coffees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entity/coffee.entity';
import { Flavor } from './entity/flavor.entity';
import { COFFEESBRANDS } from './coffees.constant';

@Module({
    imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
    controllers: [ CoffeesController ],
    providers: [CoffeesService, {
        provide: COFFEESBRANDS,
        useValue: ["nescafe", "brew", "goods"]
      }],
    exports: [CoffeesService]
})
export class CoffeesModule {}
