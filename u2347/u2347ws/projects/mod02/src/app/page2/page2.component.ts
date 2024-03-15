import { Component } from '@angular/core';
import { Picture, picture } from '../picture';

@Component({
  selector: 'page2',
  templateUrl: './page2.component.html',
  styles: [
  ]
})
export class Page2Component {
  public pictures : Picture[];
  constructor() { 
    this.pictures=[
      picture , 
      new Picture(2, "https://raw.githubusercontent.com/anitaloggg/git/main/277801256_10159637315648608_8029064320084309387_n.jpg","大港墘公園", "Anita" ), 
      new Picture(3, "https://raw.githubusercontent.com/anitaloggg/git/main/277781296_10159641399583608_6095812904717301699_n.jpg","遠眺社子島", "Anita" ), 
      new Picture(4, "https://raw.githubusercontent.com/anitaloggg/git/main/278221983_10159646024008608_6644365285868066847_n.jpg","大雨過後", "Anita" ), 
      new Picture(5, "https://raw.githubusercontent.com/anitaloggg/git/main/277467974_10159637313873608_5666693103909395765_n.jpg","t-Hub 會議中心", "Anita" )]
  } 


}
