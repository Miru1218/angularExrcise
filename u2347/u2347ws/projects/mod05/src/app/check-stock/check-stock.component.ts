import { Component, ContentChildren, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'CheckStock',
  templateUrl: './check-stock.component.html',
  styles: [
  ]
})
export class CheckStockComponent {
  @Input() Stock: number = 0;
  @Input() QTY = 0;
  info = ""; lower = false;
  // ngOnChanges(){
  //   this.lower = (this.Stock < this.QTY);
  //   this.info = this.lower ? `低於庫存，目前只有 ${this.Stock}` : '';
  //   console.log("ngOnChanges   - ");
  // }
  ngDoCheck(): void {

    this.lower = (this.Stock < this.QTY);
    this.info = this.lower ? `低於庫存，目前只有 ${this.Stock}` : '';
    console.log("ngDoCheck   - ");
  }
  GetStock() {
    this.Stock = 20;
    console.log(this.Stock);
  }



  @ContentChildren('span') spans: any;
  ngAfterContentInit() {
    console.log("ngAfterContentInit - ");
    this.spans.forEach((element: any) => {
      element.nativeElement.addEventListener("click",
        () => {
          // this.Stock = 20;
          console.log("span.click() ")
        }
      )
    });

  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked - ");
    this.spans.forEach((element: any) => {
      console.log("\t", element);
    });
  }

}
