import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

export const routes: Routes = [
  {path:'p1', component:Page1Component, title:"Reactive Form"},
  {path:'p2', component:Page2Component, title:"Template-Driven Form"},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
