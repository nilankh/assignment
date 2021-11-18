import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeService } from './employee.service';
import { Employee, EmployeeSchema } from './schemas/employee.schema';

describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeService, {
        provide: getModelToken(Employee.name),
        useValue: {
          create: jest.fn((employee: Employee) => {
            return {
              ...employee,
              id: 1
            };
          })
        }
      }],
    }).compile();

    service = module.get<EmployeeService>(EmployeeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('It shoudl create an employee and return it', async () => {
    const employee = {
      name: 'Nilank Nikhil',
      age: 1,
      salary: 1
    };
    const v1 = await service.create(employee);
    expect(v1).toStrictEqual({...employee, id: 1});
  })
});
