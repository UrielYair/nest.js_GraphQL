import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { GraphQLModule } from '@nestjs/graphql'
import { CompanyModule } from './company/company.module';
import { Company } from './company/company.entity';
import { EmployeeModule } from './employee/employee.module';
import { Employee } from './employee/employee.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/a_holdings',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [
        Company,
        Employee
      ]
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    CompanyModule,
    EmployeeModule
  ]
})
export class AppModule {}
