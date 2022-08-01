import { Component, Input } from '@angular/core';

import { Pokemon } from 'src/app/shared/definitions/pokemon.model';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
	selector: 'app-pokemon-card',
	template: `
	<div class="card">
		<!-- <img src="./assets/cards/card-green.png">

		<div class="wrapper">
			<div class="name"> {{ pokemon?.name }} </div>
			<img *ngIf="pokemon?.images?.large" lazy [src]="pokemon?.images?.large">
		</div> -->
		
		<!-- 
			Eu tinha feito um card personalizado porem 
		 	vi que a imagem do pokemon vinda da API, eh o proprio card
		-->
		<img *ngIf="pokemon?.images?.large" loading="lazy" [src]="pokemon?.images?.small">
	</div>
  `,
	styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent {
	@Input()
	public pokemon?: Pokemon;

	constructor(private pokemonService: PokemonService) { }


}
