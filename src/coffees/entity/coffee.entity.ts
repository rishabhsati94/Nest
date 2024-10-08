import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Flavor } from "./flavor.entity";

@Entity()
export class Coffee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    brand: string;

    // @Column('json', {nullable:true})
    // flavor: string[];

    @JoinTable()
    @ManyToMany(
        type => Flavor,
        flavor => flavor.coffees,
        {
            cascade: true
        }
    )
    flavors: Flavor[];

    @Column({default: 0})
    recommendatios: number
}
