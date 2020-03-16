import { Injectable } from '@angular/core';
import { GreetingsServiceMock } from './GreetingsServiceMock';
import { GreetingsServiceImpl } from './GreetingsServiceImpl';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root', 
   useClass: environment.production?GreetingsServiceImpl:GreetingsServiceMock,
})
export abstract class IGreetingsService {

  constructor() { }

  abstract greeting(): String;
}