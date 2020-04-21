import { Entity, Column, ObjectIdColumn, PrimaryColumn } from "typeorm";

@Entity()
export class Employee{
    @ObjectIdColumn()
    _id:string;
    @PrimaryColumn()
    id:string;
    @Column()
    firstName:string;
    @Column()
    lastName: string;
    @Column()
    salary: number;
}