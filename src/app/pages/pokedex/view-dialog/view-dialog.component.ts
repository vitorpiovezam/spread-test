import { Component, Inject, OnDestroy } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Pokemon } from "src/app/shared/definitions/pokemon.model";

@Component({
  selector: 'app-pokedex-view-dialog',
  template: `
    <header>
      <h2>#{{ pokemon?.nationalPokedexNumbers[0] }} {{ pokemon?.name }}</h2>
      <mat-icon (click)="close()">close</mat-icon>
    </header>

    <main>
      <img width="350px" *ngIf="pokemon?.images?.large" lazy [src]="pokemon?.images?.large">

      <div class="details">
        <form [formGroup]="form">
          <app-pokemon-form formControlName="pokemon"></app-pokemon-form>
        </form>

        <a (click)="close()" id="details" [routerLink]="['/view', pokemon.id]">
          <button mat-button>Click to attacks and other details</button>
        </a>
      </div>
    </main>

    <footer>
      
    </footer>
  `,
  styleUrls: ['./view-dialog.component.sass']
})
export class PokedexViewDialogComponent {
  pokemon!: Pokemon;
  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    private data: any,
    private dialog: MatDialogRef<PokedexViewDialogComponent>,
  ) {
    this.pokemon = this.data.pokemon;

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
      pokemon: new FormControl(this.data.pokemon)
    })
  }

  async ngOnInit() {
    this.form.disable();
  }

  close() {
    this.dialog.close();
  }
}
