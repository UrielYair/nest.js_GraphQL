import { ObjectType, Field, ID } from "@nestjs/graphql";
import { EmployeeType } from '../employee/employee.type';

@ObjectType('Company')
export class CompanyType{
    @Field(type =>ID)
    id: string;
    
    @Field()
    name: string;

    @Field(type=> [EmployeeType])
    employees: string[];
}