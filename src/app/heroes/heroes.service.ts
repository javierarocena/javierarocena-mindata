import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HeroesProvider } from './heroes.provider';
import { Hero } from './interface/hero.model';
import { HeroProvider } from './interface/hero.provider.model';

@Injectable()
export class HeroesService {
  provider: HeroProvider = new HeroesProvider();

  getAll() {
    return this.provider.getAll();
  }

  getById(heroId: string): Observable<Hero | null> {
    return this.provider.query(heroId, 'id').pipe(map((heroes) => heroes[0]));
  }

  search(name: string): Observable<Hero[]> {
    return this.provider.query(name, 'name');
  }

  update(heroId: string, partialHero: any) {
    return this.provider.update(heroId, partialHero);
  }

  delete(heroId: string) {
    return this.provider.delete(heroId);
  }
}
