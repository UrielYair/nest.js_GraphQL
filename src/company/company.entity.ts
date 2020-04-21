import { Entity, PrimaryColumn, Column, ObjectIdColumn } from "typeorm";

@Entity()
export class Company {
    @ObjectIdColumn()
    _id: string;
    @PrimaryColumn()
    id: string;
    @Column()
    name: string;
}