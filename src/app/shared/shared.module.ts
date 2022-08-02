import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';import { AddHeaderInterceptor } from '../auth/auth.interceptor';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonService } from './services/pokemon.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PokemonFormComponent } from './forms/pokemon/pokemon.form';
import { RouterModule } from '@angular/router';

const sharedModules = [
  FormsModule,
  ReactiveFormsModule,
  InfiniteScrollModule,
  MatDialogModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  RouterModule
];

@NgModule({
  declarations: [
    PokemonCardComponent,
    PokemonFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ...sharedModules,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddHeaderInterceptor,
      multi: true,
    },
    PokemonService
  ],
  exports: [
    ...sharedModules,
    PokemonCardComponent,
    PokemonFormComponent
  ]
})
export class SharedModule { }
