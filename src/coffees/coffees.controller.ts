import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {

    @Get()
    findAll(@Res() res, @Query() paginationQuery){
        const {limit, offset} = paginationQuery;
        return res.status(200).send(`this action returns all coffees. Limit ${limit}, offset: ${offset}`);
    }

    @Get(':id')
    findOne(@Param('id') id:'string'){
        return `return this ${id}`;
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)   // use this for best practise
    create(@Body() body){
        return body;
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() body){
        return `This action updates #${id} coffee`;
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return `This action removes #${id} coffee`;
    }
}
