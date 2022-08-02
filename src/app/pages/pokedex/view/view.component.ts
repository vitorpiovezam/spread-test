import { Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { Pokemon } from "src/app/shared/definitions/pokemon.model";
import { PokemonService } from "src/app/shared/services/pokemon.service";

@Component({
	selector: 'app-pokedex-view-dialog',
	template: `
    <header>
			<a routerLink="/">
				<mat-icon>arrow_back</mat-icon>
			</a>
    </header>

    <main>
			<ng-container *ngIf="pokemon; else loadingTemplate">
				<h1> #{{ pokemon?.nationalPokedexNumbers[0] }} {{ pokemon?.name }} Information</h1>

				<h2> Basic Info </h2>
				<form [formGroup]="form">
					<app-pokemon-form formControlName="pokemon"></app-pokemon-form>
				</form>

				<div class="attacks" *ngIf="pokemon.attacks">
					<div>
						<h2>Attacks</h2>
							<ng-container *ngFor="let attack of pokemon.attacks; let i = index">
								<h3> {{ i }} - {{ attack.name }}</h3>
								<p>Cost: {{ attack.cost.join(',') }}</p>
								<p>Damage: {{ attack.damage === "" ? 'Not defined' : attack.damage }}</p>
							</ng-container>
						</div>

						<div>
							<img width="230px" class="card" *ngIf="pokemon?.images?.large" lazy [src]="pokemon?.images?.large">
						</div>
					</div>
				
			</ng-container>
    </main>

		<ng-template #loadingTemplate>
			<mat-spinner diameter="50"></mat-spinner>
		</ng-template>
  `,
	styleUrls: ['./view.component.sass']
})
export class PokedexViewComponent implements OnInit {
	pokemonId: string;
	pokemon!: Pokemon;

	form: FormGroup;

	constructor(
		private pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute
	) {
		this.pokemonId = this.activatedRoute.snapshot.params['id'];
	}

	ngOnInit(): void {
		if (this.pokemonId) this.getPokemon(this.pokemonId);
	}

	getPokemon(id: string) {
		this.pokemonService.getById(id).subscribe(res => {
			this.pokemon = res.data[0];
			this.form = new FormGroup({
				pokemon: new FormControl(	this.pokemon )
			});

			console.log(this.pokemon)
			
			this.initForm();
		});
	}

	initForm() {
		if (!this.pokemon.level) this.pokemon.level = null;
    if (!this.pokemon.resistances) this.pokemon.resistances = null;
    if (!this.pokemon.retreatCost) this.pokemon.retreatCost = null;
    if (!this.pokemon.evolvesTo) this.pokemon.evolvesTo = [''];
    if (!this.pokemon.evolvesFrom) this.pokemon.evolvesFrom = null;
    if (!this.pokemon.weaknesses) this.pokemon.weaknesses = null;
    if (!this.pokemon.convertedRetreatCost) this.pokemon.convertedRetreatCost = null;
    if (!this.pokemon.abilities) this.pokemon.abilities = null;
    if (!this.pokemon.flavorText) this.pokemon.flavorText = null;
    if (!this.pokemon.rules) this.pokemon.rules = null;
    if (!this.pokemon.rarity) this.pokemon.rarity = null;
  
    this.form = new FormGroup({
      pokemon: new FormControl(this.pokemon)
    });

		this.form.disable();
	}
}
