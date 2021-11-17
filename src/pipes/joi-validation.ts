import { ValidationOptions, AnySchema } from 'joi';
import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(
    private schema: AnySchema,
    private options: ValidationOptions = {
      presence: 'required',
      abortEarly: false,
    },
  ) {}
  transform(raw: unknown): unknown {
    const { error, value } = this.schema.validate(raw, this.options);
    if (error)
      throw new BadRequestException({
        message: 'VALIDATION_ERROR',
        error: error.details,
      });
    return value;
  }
}
