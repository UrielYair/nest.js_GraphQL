import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql'
import { CompanyType } from './company.type';
import { CompanyService } from './company.service';
import { CreateCompanyInput } from './company.input';
import { AssignEmployeesToCompanyInput } from './assign-Employees-To-Company.input';
import { Company } from './company.entity';
import { EmployeeService } from '../employee/employee.service';

@Resolver(of => CompanyType)
export class CompanyResolver{
    constructor( 
        private companyService: CompanyService,
        private employeeService: EmployeeService){}

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

    @Mutation(returns => CompanyType)
    assignEmployeesToCompany(
        @Args('assignEmployeesToCompanyInput') assignEmployeesToCompanyInput: AssignEmployeesToCompanyInput
    ){
        const { companyId, employeeIds } = assignEmployeesToCompanyInput;
        return this.companyService.assignEmployeesToCompany(companyId,employeeIds);
    }

    @ResolveField()
    async employees(@Parent() company: Company){
        return this.employeeService.getManyEmployees(company.employees);
    }
}