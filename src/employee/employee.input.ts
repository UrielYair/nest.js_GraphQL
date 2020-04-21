import { InputType, Field } from "@nestjs/graphql";
import { MinLength, Min } from "class-validator";

@InputType()
export class CreateEmployeeInput{

    @MinLength(1)
    @Field()
    firstName: string;
    
    @MinLength(1)
    @Field()
    lastName: string;

    @Min(0)
    @Field()
    salary: number;
    
}