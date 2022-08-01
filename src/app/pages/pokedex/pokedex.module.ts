import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { PokedexListComponent } from './list/list.component';
import { PokedexViewDialogComponent } from './view-dialog/view-dialog.component';
import { PokedexViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    PokedexListComponent,
    PokedexViewComponent,
    PokedexViewDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: PokedexListComponent,
      },
      {
        path: 'view/:id',
        component: PokedexViewComponent
      }
    ])
  ],
  providers: [],
  bootstrap: []
})
export class PokedexModule { }
