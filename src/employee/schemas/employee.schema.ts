import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';
import { type } from 'os';

// import *as mongoose from 'mongoose';

// export const EmployeeSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
//     salary: Number,
// })

@Schema()
export class Employee {
//   @Prop({ required: false })
//   id: string;

  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  salary: number;
}

export type EmployeeDocument = Employee & Document;
export const EmployeeSchema = SchemaFactory.createForClass(Employee);
