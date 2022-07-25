import { Max, Min } from 'class-validator';

export class UpdateUserInputDto {
  @Min(18)
  @Max(99)
  age: number;
}
