import { Module } from '@nestjs/common';
import { CompanyResolver } from './company.resolver';
import { CompanyService } from './company.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './company.entity';
import { EmployeeModule } from 'src/employee/employee.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Company]),
        EmployeeModule
    ],
    providers: [
        CompanyResolver, 
        CompanyService
    ]
})
export class CompanyModule {}
