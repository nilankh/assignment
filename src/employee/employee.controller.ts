import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { EmployeeService } from './employee.service';
import { Employee } from './interfaces/employee.interface';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}
  @Get()
  findAll(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Employee> {
    return this.employeeService.findOne(id);
  }

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    return this.employeeService.create(createEmployeeDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Employee> {
    return this.employeeService.delete(id);
  }

  @Put(':id')
  update(
    @Body() updateEmployeeDto: CreateEmployeeDto,
    @Param('id') id,
  ): Promise<Employee> {
    return this.employeeService.update(id, updateEmployeeDto);
  }
}
