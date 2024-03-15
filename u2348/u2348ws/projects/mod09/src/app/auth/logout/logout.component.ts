import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styles: [
  ]
})
export class LogoutComponent  {

  constructor(private authService : AuthService, 
    private router: Router) {
          this.authService.logout();
          this.router.navigate(['/']);
   }
 

}