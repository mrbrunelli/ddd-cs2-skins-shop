import { Skin } from "../../../../src/shop/domain/entities/Skin"
import { Price } from "../../../../src/shop/domain/vos/Price"

describe("Skin", () => {
    test("Should create a new Skin", () => {
        const skin = new Skin("1", "AK-47", "Black Slate", 0.08, new Price(128.4, "BRL"), 12)
        expect(skin.finalPrice()).toBe(112.992)
    })
})