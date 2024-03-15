import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [
  ]
})
export class ProductComponent {
  // constructor(private router : Router) { } 
  // GoProd2(id: number) {
  //     this.router.navigate(['/','product','product', id]);
  //   }
  GoProd3(id: number) {
    // this.router.navigateByUrl(`/product/product/${id}`);
    this.router.navigateByUrl(`/product/${id}`);
  }
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  GoProd2(id: number) {
    // this.router.navigate(['product', id]);
    this.router.navigate([id], { relativeTo: this.activatedRoute });
  }

}
