import { Component } from '@angular/core';
import { routes } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'Tailwind CSS with Angular';
  routeList =routes;
  isDarkMode=false

  toggleDarkMode() {
    this.isDarkMode=!this.isDarkMode;
    document.documentElement.classList.toggle('dark');
   
  }
}
