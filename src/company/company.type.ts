import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType('Company')
export class CompanyType{
    @Field(type =>ID)
    id: string;
    
    @Field()
    name: string;
}