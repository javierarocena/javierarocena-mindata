import { Injectable } from '@angular/core';
import { HeroesProvider } from './heroes.provider';
import { HeroProvider } from './interface/hero.provider.model';

@Injectable()
export class HeroesService {
  provider: HeroProvider = new HeroesProvider();

  getAll() {
    return this.provider.getAll();
  }

  getById(heroId: number) {
    return this.provider.getById(heroId);
  }

  search(name: string) {}

  update(heroId: number, partialHero: any) {
    return this.provider.update(heroId, partialHero);
  }

  delete(heroId: number) {
    return this.provider.delete(heroId);
  }
}
