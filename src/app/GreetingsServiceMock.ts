import {IGreetingsService} from './IGreetingsService';

export class GreetingsServiceMock implements IGreetingsService {

  constructor() { }

  greeting(): String{
    return "Test";
  };
}