import { Price } from "../domain/Price";
import { Skin } from "../domain/Skin";

export interface SkinsRepository {
  findById(id: string): Promise<Skin | undefined>;
  findAll(): Promise<Skin[]>;
  save(skin: Skin): Promise<void>;
  delete(id: string): Promise<void>;
}

export class SkinsRepositoryInMemory implements SkinsRepository {
  private skins: Skin[] = [];

  constructor() {
    this.skins.push(
      new Skin(
        crypto.randomUUID(),
        "AK-47",
        new Price(88.4, "BRL"),
        "Black Slate",
        0.04
      ),
      new Skin(
        crypto.randomUUID(),
        "M4A1",
        new Price(119.5, "BRL"),
        "Blue Phosphor",
        0.11
      ),
      new Skin(
        crypto.randomUUID(),
        "AWP",
        new Price(214.0, "BRL"),
        "Red Lines",
        0.03
      )
    );
  }

  async findById(id: string): Promise<Skin | undefined> {
    return this.skins.find((skin) => skin.id === id);
  }

  async findAll(): Promise<Skin[]> {
    return this.skins;
  }

  save(skin: Skin): Promise<void> {
    throw new Error("Method not implemented.");
  }

  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
