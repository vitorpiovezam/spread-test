import { BaseModel } from "./base.model";

export class Pokemon extends BaseModel {
  name?: string
  images?: PokemonImages;
  nationalPokedexNumbers?: number[];
  level?: number = null;
  resistances?: number = null;
  retreatCost?: number = null;
  evolvesTo?: string[] = null;
  evolvesFrom?: string[] = null;
  convertedRetreatCost?: string[] = null;
  weaknesses?: string[] = null;
  abilities?: string[] = null;
  flavorText?: string[] = null;
  rules?: string[] = null;
  rarity?: string[] = null;

  constructor() {
    super()
  }
}

export interface PokemonApiResponse {
  data: Pokemon[];
}

export interface PokemonImages {
  large: string;
  small: string;
}
