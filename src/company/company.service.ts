import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './company.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateCompanyInput } from './company.input';

@Injectable()
export class CompanyService {
    constructor(@InjectRepository(Company) private companyRepository: Repository<Company>) {}

    async getCompany(id: string): Promise<Company> {
        return this.companyRepository.findOne({id});
    }

    async getAllCompanies(): Promise<Company[]> {
        return this.companyRepository.find();
    }

    async createCompany(createCompanyInput: CreateCompanyInput): Promise<Company>{
        const { name } = createCompanyInput;
        const newCompany = this.companyRepository.create({
            id: uuid(),
            name
        });

        return this.companyRepository.save(newCompany);
    }
}
