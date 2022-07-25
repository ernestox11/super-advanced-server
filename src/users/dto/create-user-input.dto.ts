import { IsEmail, Max, Min } from 'class-validator';

export class CreateUserInputDto {
  @IsEmail()
  email: string;

  @Min(18)
  @Max(99)
  age: number;
}
