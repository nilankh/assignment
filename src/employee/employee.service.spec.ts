import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeService } from './employee.service';
import { Employee, EmployeeSchema } from './schemas/employee.schema';

describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmployeeService,
        {
          provide: getModelToken(Employee.name),
          useValue: {
            create: jest.fn((employee: Employee) => {
              return {
                ...employee,
                id: 1,
              };
            }),
            find: jest.fn(() => {
              return [];
            }),

            findOne: jest.fn((condition: { _id: string }) => {
              const v1 = {
                name: 'abc',
                age: 2,
                salary: 1,
              };
              return {
                ...v1,
                ...condition,
              };
            }),

            delete: jest.fn((condition: { _id: string }) => {
              const v1 = {
                name: 'abc',
                age: 2,
                salary: 1,
              };
              return {
                ...v1,
                ...condition,
              };
            }),
            update: jest.fn(
              (employee: Employee, condition: { _id: string }) => {
                
              },
            ),
          },
        },
      ],
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
      salary: 1,
    };
    const v1 = await service.create(employee);
    expect(v1).toStrictEqual({ ...employee, id: 1 });
  });

  it('It should return an empty array', async () => {
    const v1 = await service.findAll();
    expect(v1).toStrictEqual([]);
  });

  it('It should return an id', async () => {
    const v1 = await service.findOne('1');
    expect(v1).toStrictEqual({ name: 'abc', age: 2, salary: 1, _id: '1' });
  });

  it('It should return an array', async () => {
    const v1 = await service.delete('1');
    expect(v1).toStrictEqual({ name: 'abc', age: 2, salary: 1 });
  });
});
