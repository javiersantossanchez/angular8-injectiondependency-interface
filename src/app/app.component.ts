import { Component } from '@angular/core';
import {IGreetingsService} from './IGreetingsService';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name: String;
  constructor(private service: IGreetingsService ) {
    this.name = this.service.greeting();
  }
   
}
