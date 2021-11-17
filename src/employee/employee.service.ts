import { Injectable } from '@nestjs/common';
import { Employee } from './interfaces/employee.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EmployeeService {
  // Fake data
  //   private readonly employees: Employee[] = [
  //     {
  //       id: '1234658',
  //       name: 'Nilank Nikhil',
  //       age: 2,
  //       salary: 1,
  //     },
  //     {
  //       id: '3212658',
  //       name: 'Neel Punj',
  //       age: 211,
  //       salary: 11,
  //     },
  //     {
  //       id: '9314658',
  //       name: 'Darvesh',
  //       age: 15,
  //       salary: 100000,
  //     },
  //   ];
  constructor(
    @InjectModel('Employee') private readonly employeeModel: Model<Employee>,
  ) {}
  //   findAll(): Employee[] {
  //     return this.employees;
  //   }

  async findAll(): Promise<Employee[]> {
    return await this.employeeModel.find();
  }

  //   findOne(id: string): Employee {
  //     return this.employees.find((employee) => employee.id === id);
  //   }
  async findOne(id: string): Promise<Employee> {
    return await this.employeeModel.findOne({ _id: id });
  }

  async create(employee: Employee): Promise<Employee> {
    const newEmployee = new this.employeeModel(employee);
    return await newEmployee.save();
  }

  async delete(id: string): Promise<Employee> {
    return await this.employeeModel.findByIdAndDelete(id);
  }

  async update(id: string, employee: Employee): Promise<Employee> {
    return await this.employeeModel.findByIdAndUpdate(id, employee, {
      new: true,
    });
  }
}
