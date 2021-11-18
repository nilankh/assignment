import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Employee } from './interfaces/employee.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel('Employee') private readonly employeeModel: Model<Employee>,
  ) {}

  async findAll(): Promise<Employee[]> {
    return await this.employeeModel.find();
  }

  async findOne(id: string): Promise<Employee> {
    return await this.employeeModel.findOne({ _id: id });
  }

  async create(employee: Employee): Promise<Employee> {
    try {
      const newEmployee = await this.employeeModel.create(employee);
      return newEmployee;
    } catch (error) {
      throw new InternalServerErrorException();
    }
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
