import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { CoffeesService } from './coffees.service';


@Controller('coffees')
export class CoffeesController {

    constructor(
        private readonly coffeesService: CoffeesService
    ) {}

    @Get()
    findAll(@Res() res, @Query() paginationQuery){
        return this.coffeesService.findAll(res, paginationQuery);
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return this.coffeesService.findOne(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)   // use this for best practise
    create(@Body() body){
        return this.coffeesService.create(body);
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() body){
        return this.coffeesService.update(id, body)
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.coffeesService.remove(id);
    }
}
