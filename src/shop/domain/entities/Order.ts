import { Customer } from "./Customer";
import { OrderItem } from "./OrderItem";

export class Order {
  constructor(
    readonly id: string,
    private items: OrderItem[] = [],
    readonly customer: Customer,
    readonly finishedAt: Date = new Date()
  ) {}

  total(): number {
    return this.items.reduce((acc, item) => acc + item.skin.finalPrice(), 0);
  }
}
