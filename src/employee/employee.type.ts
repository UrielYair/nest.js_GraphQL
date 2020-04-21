import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType('Employee')
export class EmployeeType{

    @Field(type=>ID)
    id: string;

    @Field()
    firstName: string;
    
    @Field()
    lastName: string;
    
    @Field()
    salary: number;

}