import { Component } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-page2',
  template: `
 <p>
      page2 works!
    </p>
    <h1> {{s1.a}} </h1>
    <button (click)="Display()">
      Display()
    </button>

  `,
  styles: [
  ]
})
export class Page2Component {
  constructor(public s1: Service1Service) {
    s1.a = "data2";
  }
  ngOnInit(): void { }
  Display() {
    console.log("form page2: " + this.s1.a);
  }

}
