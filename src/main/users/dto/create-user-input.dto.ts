import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateUserInputDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  branchOffice: string;

  @IsString()
  @IsNotEmpty()
  accessLevel: string;

  @IsString()
  @IsNotEmpty()
  nationality: string;

  @IsNumber()
  @IsNotEmpty()
  idNumber: number;

  @IsArray()
  @IsNotEmpty()
  phoneNumber: [number];
}
