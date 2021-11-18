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
    try {
      const a1 = await this.employeeModel.find();
      return a1;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async findOne(id: string): Promise<Employee> {
    try {
      const a1 = await this.employeeModel.findOne({ _id: id });
      return a1;
    } catch (error) {
      throw new InternalServerErrorException();
    }
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
    try {
      const a1 = await this.employeeModel.findByIdAndDelete(id);
      return a1;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async update(id: string, employee: Employee): Promise<Employee> {
    try {
      const a1 = await this.employeeModel.findByIdAndUpdate(id, employee, {
        new: true,
      });
      return a1;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
