import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { CompanyType } from './company.type';
import { CompanyService } from './company.service';
import { CreateCompanyInput } from './company.input';

@Resolver(of => CompanyType)
export class CompanyResolver{
    constructor( private companyService: CompanyService){}

    @Query(returns => CompanyType)
    company(@Args('id') id: string,){
        return this.companyService.getCompany(id);
    }

    @Query(returns => [CompanyType])
    companies(){
        return this.companyService.getAllCompanies();
    }

    @Mutation(returns => CompanyType)
    createCompany(
        @Args('createCompanyInput') createCompanyInput :CreateCompanyInput
    ){
        return this.companyService.createCompany(createCompanyInput);
    }
}