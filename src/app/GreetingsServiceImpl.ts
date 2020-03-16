import {IGreetingsService} from './IGreetingsService';

export class GreetingsServiceImpl implements IGreetingsService {

  constructor() { }

  greeting(): String{
    return "Production";
  };
}