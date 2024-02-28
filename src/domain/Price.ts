export class Price {
  constructor(
    private readonly amount: number,
    private readonly currency: string
  ) {}

  getAmount(): number {
    return this.amount;
  }

  getCurrency(): string {
    return this.currency;
  }
}
