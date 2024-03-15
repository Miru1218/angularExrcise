import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeeklyWeatherComponent } from './weekly-weather/weekly-weather.component';
export const routes: Routes = [
  {path: "weekly", component: WeeklyWeatherComponent, title:"周天氣預報"}, 
  { path: "", redirectTo: "weekly", pathMatch:  "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
