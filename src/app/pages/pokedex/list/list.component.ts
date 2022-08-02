import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { debounceTime, Subject, takeUntil, timer } from 'rxjs';
import { Pokemon } from 'src/app/shared/definitions/pokemon.model';
import { PokemonService } from 'src/app/shared/services/pokemon.service';
import { PokedexViewDialogComponent } from '../view-dialog/view-dialog.component';

@Component({
  selector: 'app-pokedex-list',
  template: `
    <header>
      <form [formGroup]="form">
        <div class="input-wrapper">
          <input type="text" id="name" formControlName="name" placeholder="Enter a pokemon name to filter" autofocus/>
          <mat-spinner *ngIf="loading" diameter="40"></mat-spinner>
        </div>
      </form>
    </header>
  
    <main  
      infiniteScroll
      [infiniteScrollDistance]="10"
      [infiniteScrollUpDistance]="10"
      [infiniteScrollThrottle]="20"
      (scrolled)="onScroll()">

      <ng-container *ngIf="pokemons.length === 0">
        No pokemons found
      </ng-container>

      <app-pokemon-card
        *ngFor="let pokemon of pokemons"
        [pokemon]="pokemon"
        (click)="openDetails(pokemon)"
      ></app-pokemon-card>
    </main>
  `,
  styleUrls: ['./list.component.sass']
})
export class PokedexListComponent implements OnInit, OnDestroy {
  private readonly subscriptions$ = new Subject();
  public pokemons = [{}] as Pokemon[];
  public filteredList = [] as Pokemon[];

  loading = false;
  page = 1;
  limit = 15;

  form: FormGroup = new FormGroup({
    name: new FormControl('')
  });

  constructor(
    private pokemonService: PokemonService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getPokemons();
  }

  initForm() {
    this.form.valueChanges.pipe(
      takeUntil(this.subscriptions$),
      debounceTime(800),
    ).subscribe(value => this.getPokemons(value.name));
  }

  getPokemons(name?: string) {
    this.loading = true;

    this.pokemonService.getCards(this.page, this.limit, name).subscribe(res => {
      this.pokemons = res.data;
      this.loading = false;
    });
  }

  onScroll() {
    alert('ae porra')
    this.limit += this.limit;
  }

  openDetails(pokemon: Pokemon) {
    this.dialog.open(PokedexViewDialogComponent, {
      width: '750px',
      height: '630px',
      data: { pokemon }
    });
  }

  ngOnDestroy() {
    this.subscriptions$.next(true);
    this.subscriptions$.complete();
  }
 }
