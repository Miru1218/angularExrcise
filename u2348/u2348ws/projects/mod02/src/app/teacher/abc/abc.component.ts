import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styles: [
  ]
})
export class AbcComponent {
  data: any;
  constructor(private router: Router, private route: ActivatedRoute) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.data = this.router.getCurrentNavigation()?.extras.state?.['data'];
    }
   }
 ngDoCheck(){

  // this.route.snapshot.params?.['array'].forEach((element: any) => {
  //   console.log(element);
  // });
  if (this.router.getCurrentNavigation()?.extras.state) {
    this.data = this.router.getCurrentNavigation()?.extras.state?.['data'];
  }
 }
}
