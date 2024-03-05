import { Customer } from "../../../../src/shop/domain/entities/Customer"
import { Order } from "../../../../src/shop/domain/entities/Order"
import { OrderItem } from "../../../../src/shop/domain/entities/OrderItem"
import { Skin } from "../../../../src/shop/domain/entities/Skin"
import { Price } from "../../../../src/shop/domain/vos/Price"

describe("Order", () => {
    test("Should create a new Order", () => {
        const orderItems = [
            new OrderItem(new Skin("1", "AK-47", "Black Slate", 0.08, new Price(128.4, "BRL"), 12), 5),
            new OrderItem(new Skin("2", "M4A1", "Blue Phosphor", 0.18, new Price(151.0, "BRL"), 5), 1)
        ]
        const order = new Order("1", orderItems, new Customer("1", "Josh", "josh@gmail.com"))
        expect(order.total()).toBe(708.41)
        expect(order.getItems()).toHaveLength(2)
        expect(order.finishedAt).toBeInstanceOf(Date)
    })
})