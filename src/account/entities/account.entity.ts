import { GlobalEntity } from 'src/global-entities/global-entity';
import { Entity, Column } from 'typeorm';

@Entity({ name: 'account' })
export class Account extends GlobalEntity {
  @Column()
  accountNumber: string;

  @Column()
  balance: string;

  @Column()
  accountType: string;
}
