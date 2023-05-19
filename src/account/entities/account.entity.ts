import { GlobalEntity } from 'src/global-entities/global-entity';
import { Entity, Column } from 'typeorm';
import { AccountType } from '../dto/accountType.enum';

@Entity({ name: 'account' })
export class Account extends GlobalEntity {
  @Column({ unique: true })
  name: string;

  @Column()
  accountNumber: string;

  @Column()
  balance: string;

  @Column()
  accountType: AccountType;
}
