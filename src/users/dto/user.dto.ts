import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
 @IsString()
  @IsNotEmpty()
  @MinLength(3, { message: 'First Name must be at least 3 characters long' })
  @MaxLength(100, { message: 'First Name must be at most 100 characters long' })
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3, { message: 'Last Name must be at least 3 characters long' })
  @MaxLength(100, { message: 'Last Name must be at most 100 characters long' })
  lastName: string;


  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNumber()
  age: number;

  @IsString()
  @IsOptional()
  @MaxLength(10, { message: 'Gender must be at most 10 characters long' })
  gender: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;
}
export class UpdateUserDto extends PartialType(CreateUserDto) {}

export class GetUserParamsDto {
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  id: number;
}
