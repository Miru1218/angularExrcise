import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FallComponent } from './fall/fall.component';
import { WinterComponent } from './winter/winter.component';
import { SummerComponent } from './summer/summer.component';
import { HomeComponent } from './home/home.component';
import { SpringComponent } from './spring/spring.component';
import { TipsComponent } from './tips/tips.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    FallComponent,
    WinterComponent,
    SummerComponent,
    HomeComponent,
    SpringComponent,
    TipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
