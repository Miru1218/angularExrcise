import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SpringComponent } from './spring/spring.component';
import { SummerComponent } from './summer/summer.component';
import { FallComponent } from './fall/fall.component';
import { WinterComponent } from './winter/winter.component';
import { NotFoundComponent } from './not-found/not-found.component';


export const routes: Routes = [
  /// 請根據目前的component 產生路由表
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: '首頁' },
  { path: 'spring', component: SpringComponent, title: '春天' },
  { path: 'summer', component: SummerComponent, title: '夏天' },
  { path: 'fall', component: FallComponent, title: '秋天' },
  { path: 'winter', component: WinterComponent, title: '冬天' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
