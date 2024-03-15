import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoFGComponent } from './demo-fg/demo-fg.component';
import { DemoStrictlyTypedComponent } from './demo-strictly-typed/demo-strictly-typed.component';
import { Demo1Component } from './demo1/demo1.component';


export const routes: Routes = [
  {path:"Demo1", component:Demo1Component, title:"Demo1"}, 
  {path:"DemoFG", component:DemoFGComponent, title:"DemoFG"},
  {path:"DemoST", component:DemoStrictlyTypedComponent, title:"DemoST"},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
