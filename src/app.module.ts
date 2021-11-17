import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeController } from './employee/employee.controller';
import { EmployeeService } from './employee/employee.service';
import { EmployeeModule } from './employee/employee.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';

@Module({
  imports: [EmployeeModule, MongooseModule.forRoot(config.mongoURI)],
  // controllers: [AppController, EmployeeController],
  // providers: [AppService, EmployeeService],
})
export class AppModule {}
