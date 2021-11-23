import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeController } from './employee/employee.controller';
import { EmployeeService } from './employee/employee.service';
import { EmployeeModule } from './employee/employee.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
// import config from './config/keys';

@Module({
  // imports: [EmployeeModule, MongooseModule.forRoot(config.mongoURI)],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    EmployeeModule,
    MongooseModule.forRoot(process.env.DATABASE_URI),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
