import { Component, forwardRef, Input, OnDestroy } from "@angular/core";
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormGroup, FormControl, Validators } from "@angular/forms";
import { Pokemon } from "../../definitions/pokemon.model";

@Component({
	selector: 'app-pokemon-form',
	template: `
		<form [formGroup]="form">
			<mat-form-field appearance="outline">
				<mat-label>Pokedex ID</mat-label>
				<input matInput placeholder="Pokedex ID" formControlName="nationalPokedexNumbers" required>
			</mat-form-field>

			<mat-form-field appearance="outline">
				<mat-label>Name</mat-label>
				<input matInput placeholder="Pokemon Name" formControlName="name" required>
			</mat-form-field>

			<mat-form-field appearance="outline">
				<mat-label>Types</mat-label>
				<input matInput placeholder="Types" formControlName="types" required>
			</mat-form-field>
		</form>
  	`,
	styles: [`
		form
			display: flex
			flex-flow: column
	`],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			multi: true,
			useExisting: forwardRef(() => PokemonFormComponent)
		},
		{
			provide: NG_VALIDATORS,
			useExisting: forwardRef(() => PokemonFormComponent),
			multi: true
		}
	]
})
export class PokemonFormComponent implements OnDestroy {
	pokemon!: Pokemon;
	form: FormGroup;

	constructor() {
		this.form = new FormGroup({
			id: new FormControl(''),
			name: new FormControl(''),
			supertype: new FormControl(''),
			subtypes: new FormControl(''),
			level: new FormControl(''),
			hp: new FormControl(''),
			types: new FormControl(''),
			attacks: new FormControl(''),
			weaknesses: new FormControl(''),
			resistances: new FormControl(''),
			retreatCost: new FormControl(''),
			convertedRetreatCost: new FormControl(''),
			set: new FormControl(''),
			number: new FormControl(''),
			artist: new FormControl(''),
			rarity: new FormControl(''),
			nationalPokedexNumbers: new FormControl(''),
			legalities: new FormControl(''),
			images: new FormControl(''),
			tcgplayer: new FormControl(''),
			cardmarket: new FormControl(''),
			evolvesTo: new FormControl(''),
			evolvesFrom: new FormControl(''),
			abilities: new FormControl(''),
			flavorText: new FormControl(''),
			rules: new FormControl(''),
		});
	}

	writeValue(v: Pokemon) {
		this.form.setValue(v, { emitEvent: true });
	}

	registerOnChange(fn: (v: any) => void) {
		this.form.valueChanges.subscribe((val) => {
			fn(val);
		});
	}

	setDisabledState(disabled: boolean) {
		disabled ? this.form.disable() : this.form.enable();
	}

	registerOnTouched(fn: () => void) {
		this.onTouched = fn;
	}

	onTouched: () => void = () => { };

	validate() {
		return this.form.valid;
	}

	ngOnDestroy(): void {
		this.form.reset();
	}
}
