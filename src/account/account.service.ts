import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private accountsRepository: Repository<Account>,
  ) {}
  async create(createAccountDto: CreateAccountDto) {
    return await this.accountsRepository.save(createAccountDto);
  }

  async findAll() {
    return await this.accountsRepository.find();
  }

  async findOne(id: string) {
    return await this.accountsRepository.findOne({
      where: { id: id },
    });
  }

  async update(id: string, updateAccountDto: UpdateAccountDto) {
    return await this.accountsRepository.update(id, updateAccountDto);
  }

  async remove(id: string) {
    return await this.accountsRepository.delete(id);
  }
}
