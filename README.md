<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```



## Controller
- Creation of Controller

```bash
$ nest g co
```

- Handle Http Status Codes with two approaches


## Service

- Creation of Service

``` bash
$ nest g s
```

## Entity

- Creation of Entity and DTO

``` bash
$ nest g cl coffees/entity/coffee.entity --no-spec --flat
```

- Creation and Intigration of DTO

``` bash
$ nest g cl coffees/dto/update-coffee.dto --no-spec --flat
```


## Module

- Creation of Module

``` bash
$ nest g mo
```

- Add Validation using npm package

``` bash
$ npm i class-validator class-transformer 
```

- For maping the same Code example in update DTO
``` bash
$ npm i @nestjs/mapped-types
```


## Integration With DB

- Create docker yml file
- using adminer for db ui
- if you want to use postgres then use this instead of adminer

```
  dbadmin:
    image: dpage/pgadmin4
    restart: always
    ports:
      - 5050:80
    environment:
      PGADMIN_DEFAULT_EMAIL: admin@admin.com
      PGADMIN_DEFAULT_PASSWORD: pgadmin4
```

- Install typeorm and postgres

``` bash
 $ npm install @nestjs/typeorm typeorm pg
```


## Repository

- Create a Constructor in service file
```
  constructor(
      @InjectRepository(CoffeeEntity)
      private readonly coffeeRepository : Repository<CoffeeEntity>
    ){}
```


## Relation

- Create one Flavour Entity
- Create Relation from Coffee Entity with Flavor Entity
- Use Flavor Entity in Coffee Service file

## Cascading Insert and Update

- Add Cascading in Coffee Entity
- Created one private preloadFlavorByName method
- use this function in create and update method in service file

## Adding a Pagination

- Create a Command DTO For Pagination
- After the declaration of transformOptions in main we don't need to specify the types like this 

``` 
  # For Reference check this in Pagination dto
  @Type(()=> Number) 
```


```
transformOptions: {
      enableImplicitConversion: true
    }
```


## Adding Transactions

- Create a common Event Class
- import DataSource from typeorm for more check coffees service file


## Indexing

  There are two approaches

  ```
    @Index()
    @Column()
    name: string;
  ```

  ```
    Composite index that contains Multiple column
    @Index(['name', 'type']) // <-- 
    export class Event {}
  ```


## Migration Setup

  - Create a typeorm-cli.config.ts
  - Creating a TypeOrm Migration

``` bash
  $ npx typeorm migration:create src/migrations/MigrationName
```

  - Build the Project

``` bash
 $ npm run build
```

  - Run the Migrations
``` bash
 $ npx typeorm migration:run -d dist/typeorm-cli.config
```
  - Revert the migrations
``` bash
 $ npx typeorm migration:revert -d dist/typeorm-cli.config
```
  - Generate the migrations
``` bash
 $ npx typeorm migration:generate migrations/MigrationName -d dist/typeorm-cli.config
```


# Dependency Injection

- For this check Coffee Module

  ```
    providers: [{
        provide: CoffeesService,
        useClass: CoffeesService
    }],
  ```

# Encapsulation
- Create Coffee Rating module and then create a one service and export to other module
- Export Coffee Service from coffee module to public