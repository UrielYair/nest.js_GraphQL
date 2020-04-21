import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateEmployeeInput } from './employee.input';

@Injectable()
export class EmployeeService {
    constructor(@InjectRepository(Employee) private employeeRepository: Repository<Employee>){}

    async getEmployee(id: string): Promise<Employee> {
        return this.employeeRepository.findOne({id});
    }

    async getAllEmployees() : Promise<Employee[]>{
        return this.employeeRepository.find();
    }

    async createEmployee(createEmployeeInput: CreateEmployeeInput): Promise<Employee>{
        const { firstName, lastName, salary } = createEmployeeInput;
        const newEmployee = this.employeeRepository.create({
            id: uuid(),
            firstName: firstName,
            lastName: lastName,
            salary: salary
        });

        return this.employeeRepository.save(newEmployee);
    }

    async getManyEmployees(employeeIds: string[]): Promise<Employee[]>{
        return this.employeeRepository.find({
            where:{
                id:{
                    $in: employeeIds,
                }
            }
        });
    }
}
