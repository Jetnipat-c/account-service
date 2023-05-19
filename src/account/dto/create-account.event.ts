export class AccountCreatedEvent {
  constructor(
    public readonly accountNumber: string,
    public readonly balance: string,
    public readonly accountType: string,
  ) {}

  toString() {
    return JSON.stringify({
      accountNumber: this.accountNumber,
      balance: this.balance,
      accountType: this.accountType,
    });
  }
}
