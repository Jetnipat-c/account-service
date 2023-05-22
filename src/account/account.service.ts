import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from './entities/account.entity';
import { FindAccountDto } from './dto/find-account.dto';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private accountsRepository: Repository<Account>,
  ) {}
  async create(createAccountDto: CreateAccountDto) {
    const accountName = await this.accountsRepository.findOne({
      where: { name: createAccountDto.name },
    });
    if (accountName) {
      return new BadRequestException('Account name already exists');
    }

    let randomNumber = '';
    for (let i = 0; i < 10; i++) {
      randomNumber += Math.floor(Math.random() * 10).toString();
    }

    const validateAccountNumber = await this.accountsRepository.findOne({
      where: { accountNumber: randomNumber },
    });
    if (validateAccountNumber) {
      return this.create(createAccountDto);
    }
    console.log('randomNumber', randomNumber);
    const account = new Account();
    account.name = createAccountDto.name;
    account.accountNumber = randomNumber;
    account.balance = createAccountDto.balance;
    account.accountType = createAccountDto.accountType;
    return await this.accountsRepository.save(account);
  }

  async findAll() {
    return await this.accountsRepository.find();
  }

  async findOne(findAccountDto: FindAccountDto): Promise<Account> {
    return await this.accountsRepository.findOne({
      where: { accountNumber: findAccountDto.accountNumber },
    });
  }

  async update(updateAccountDto: UpdateAccountDto) {
    return await this.accountsRepository.update(
      updateAccountDto.id,
      updateAccountDto,
    );
  }

  async remove(id: string) {
    return await this.accountsRepository.delete(id);
  }
}
