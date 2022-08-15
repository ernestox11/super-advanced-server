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
  email: string;

  @IsString()
  password: string;

  @IsBoolean()
  isActive: boolean;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  branchOffice: string;

  @IsString()
  accessLevel: string;

  @IsString()
  nationality: string;

  @IsNumber()
  idNumber: number;

  @IsArray()
  @IsNotEmpty()
  phoneNumber: [number];
}
