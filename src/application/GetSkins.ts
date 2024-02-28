import { SkinsRepository } from "../infra/SkinsRepository";

export class GetSkins {
  constructor(private readonly skinsRepository: SkinsRepository) {}

  async execute(): Promise<GetSkinsResponse[]> {
    const skins = await this.skinsRepository.findAll();
    return skins.map((skin) => {
      return {
        id: skin.id,
        name: skin.name,
        price: skin.getPrice(),
        priceInBRL: Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(skin.getPrice()),
        description: skin.description,
        float: skin.float,
      };
    });
  }
}

export type GetSkinsResponse = {
  id: string;
  name: string;
  price: number;
  priceInBRL: string;
  description: string;
  float: number;
};
