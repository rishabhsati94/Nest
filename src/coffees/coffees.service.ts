import {Injectable } from '@nestjs/common';

@Injectable()
export class CoffeesService {

    findAll(res: any, paginationQuery:any){
        const {limit, offset} = paginationQuery;
        return res.status(200).send(`this action returns all coffees. Limit ${limit}, offset: ${offset}`);
    }

    findOne(id:string){
        return `return this ${id}`;
    }
    
    create(body: any){
        return body;
    }

    update(id:string, body: any){
        return `This action updates #${id} coffee`;
    }

    remove(id: string){
        return `This action removes #${id} coffee`;
    }
}
