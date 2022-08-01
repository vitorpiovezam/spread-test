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
    </main>

    <footer>
      
    </footer>
  `,
	styleUrls: ['./view.component.sass']
})
export class PokedexViewComponent implements OnInit {
	pokemon!: Pokemon;

	constructor(
		private pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute
	) {

	}

	ngOnInit(): void {
		
	}
}
