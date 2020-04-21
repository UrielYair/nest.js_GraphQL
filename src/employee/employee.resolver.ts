import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { EmployeeType } from './employee.type';
import { EmployeeService } from './employee.service';
import { CreateEmployeeInput } from './employee.input';

@Resolver(of => EmployeeType)
export class EmployeeResolver{
    constructor(private employeeService: EmployeeService) {}

    @Query(returns => EmployeeType)
    empolyee(@Args('id') id: string){
        return this.employeeService.getEmployee(id);
    }

    @Query(returns => [EmployeeType])
    employees(){
        return this.employeeService.getAllEmployees();
    }

    @Mutation(returns => EmployeeType)
    createEmployee(@Args('createEmployeeInput') createEmployeeInput: CreateEmployeeInput){
        return this.employeeService.createEmployee(createEmployeeInput);
    }

}