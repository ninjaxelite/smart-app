import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Station {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    name: string;

    @Column("text")
    description: string;

    @Column("double")
    views: number;

    @Column()
    isPublished: boolean;

    constructor($id: number, $name: string, $desc: string, $views: number, $isPublished: boolean) {
        this.id=$id;
        this.name=$name;
        this.description=$desc;
        this.views=$views;
        this.isPublished=$isPublished;
    }


}