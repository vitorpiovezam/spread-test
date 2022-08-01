import { BaseService } from "./base.service";
import { Pokemon, PokemonApiResponse } from "../definitions/pokemon.model";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class PokemonService extends BaseService<Pokemon> {
	constructor(http: HttpClient) {
		super(http)
	}

	getCards(page: number = 1, pageSize: number = 20, name?: string) {
		let params = new HttpParams();
    params = params.append('page', page);
		params = params.append('pageSize', pageSize);
		if (name) params = params.append('q', `name:${name}*`)

		return this.http.get<PokemonApiResponse>(`${this.apiUrl}/cards`, {params});
	}
}
