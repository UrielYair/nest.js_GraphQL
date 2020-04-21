import { InputType, Field, ID } from "@nestjs/graphql";
import { IsUUID } from "class-validator";


@InputType()
export class AssignEmployeesToCompanyInput{
    @IsUUID()
    @Field(type => ID)
    companyId: string;

    @IsUUID("4", { each: true })
    @Field(type => [ID])
    employeeIds: string[];
}