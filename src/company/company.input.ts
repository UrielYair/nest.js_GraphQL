import { InputType, Field, ID } from "@nestjs/graphql";
import { MinLength, IsUUID } from 'class-validator'

@InputType()
export class CreateCompanyInput{
    @MinLength(1)
    @Field()
    name: string;

    @IsUUID("4", { each:true })
    @Field(()=> [ID], {defaultValue: []})
    employees: string[];
}