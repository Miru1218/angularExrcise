import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UseTableComponent } from './use-table/use-table.component';
import { UseMatTableComponent } from './use-mat-table/use-mat-table.component';

export const routes: Routes = [
  {path:"p1", component: UseTableComponent, title:"Use Table"},
  {path:"p2", component: UseMatTableComponent, title:"Use MatTable"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
