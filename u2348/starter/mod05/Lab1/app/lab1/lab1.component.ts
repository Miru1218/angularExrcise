import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab1',
  templateUrl: './lab1.component.html',
  styles: [
  ]
})
export class Lab1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showPWDIcon = "visibility";
  pwdType = "password";
  SeePassword() {
    if (this.pwdType === 'password') {
      this.pwdType = 'text';
      this.showPWDIcon = "visibility_off";
    } else {
      this.pwdType = 'password';
      this.showPWDIcon = "visibility";
    }
  }
  Saved() {

  }
  AddNew(){

  }
}
