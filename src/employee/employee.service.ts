import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateEmployeeInput } from './employee.input';

@Injectable()
export class EmployeeService {
    constructor(@InjectRepository(Employee) private emoployeeRepository: Repository<Employee>){}

    async getEmployee(id: string): Promise<Employee> {
        return this.emoployeeRepository.findOne({id});
    }

    async getAllEmployees() : Promise<Employee[]>{
        return this.emoployeeRepository.find();
    }

    async createEmployee(createEmployeeInput: CreateEmployeeInput): Promise<Employee>{
        const { firstName, lastName, salary } = createEmployeeInput;
        const newEmployee = this.emoployeeRepository.create({
            id: uuid(),
            firstName: firstName,
            lastName: lastName,
            salary: salary
        });

        return this.emoployeeRepository.save(newEmployee);
    }
}
