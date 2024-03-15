import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styles: [
  ]
})
export class TipsComponent {
  @Input() Message: string = "";
  @Input() Level: string = "Info";
  theme: string = "";
  info: string = " bg-blue-300 text-black ";
  warning: string = " bg-pink-300 ";
  success: string = " bg-green-500 text-white ";
  error: string = " bg-red-500 text-white ";
  ngOnInit(): void {
    switch (this.Level) {      
      case "Warning":
        this.theme = this.warning;
        break;
      case "Success":
        this.theme = this.success;
        break;
      case "Error":
        this.theme = this.error;
        break;
      default:
        this.theme = this.info;
    }
  }

}
