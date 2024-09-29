import { Module } from '@nestjs/common';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [CoffeesModule, TypeOrmModule.forRoot({
    type: 'postgres', // type of our database
    host: 'localhost', // database host
    port: 5432, // database host
    username: 'user', // username
    password: 'user', // user password
    database: 'coffees', // name of our database,
    autoLoadEntities: true, // models will be loaded automatically 
    synchronize: true, // your entities will be synced with the database(recommended: disable in prod)

  })],
})
export class AppModule {}
