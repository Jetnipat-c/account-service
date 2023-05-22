import { Controller } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { MessagePattern } from '@nestjs/microservices';
import { Account } from './entities/account.entity';
import { FindAccountDto } from './dto/find-account.dto';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @MessagePattern({ cmd: 'createAccount' })
  async createAccount(createAccountDto: CreateAccountDto): Promise<any> {
    return await this.accountService.create(createAccountDto);
  }

  @MessagePattern({ cmd: 'findAllAccounts' })
  async findAllAccounts(): Promise<Account[]> {
    return await this.accountService.findAll();
  }

  @MessagePattern({ cmd: 'findAccount' })
  async findAccount(findAccountDto: FindAccountDto): Promise<Account> {
    return await this.accountService.findOne(findAccountDto);
  }

  @MessagePattern({ cmd: 'updateAccount' })
  async updateAccount(updateAccountDto: UpdateAccountDto): Promise<any> {
    return await this.accountService.update(updateAccountDto);
  }

  @MessagePattern({ cmd: 'deleteAccount' })
  async deleteAccount({ id }): Promise<any> {
    return await this.accountService.remove(id);
  }
}
