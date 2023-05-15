import { IsEnum, IsNotEmpty } from 'class-validator';
import { AccountType } from './accountType.enum';

export class CreateAccountDto {
  @IsNotEmpty()
  accountNumber: string;

  @IsNotEmpty()
  balance: string;

  @IsNotEmpty()
  @IsEnum(AccountType)
  accountType: string;
}
