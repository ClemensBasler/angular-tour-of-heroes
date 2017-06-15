import { Injectable } from '@angular/core';

import { HEROES } from '../stuff/mock-heroes';
import { Hero } from '../interfaces/hero';

@Injectable()
export class HeroServiceService {

  getHeroes(): Hero[]{
    return HEROES;
  }

}
