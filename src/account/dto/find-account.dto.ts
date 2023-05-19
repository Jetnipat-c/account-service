import { IsNotEmpty } from 'class-validator';

export class FindAccountDto {
  @IsNotEmpty()
  accountNumber: string;
}
