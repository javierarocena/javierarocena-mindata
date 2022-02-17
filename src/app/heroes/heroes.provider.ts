import { HEROES_MOCK_DATA } from './mocks/heroes.mock';
import { delay, from, Observable, of } from 'rxjs';
import { Hero } from './interface/hero.model';
import { HeroProvider } from './interface/hero.provider.model';
import { HttpClient } from '@angular/common/http';

export class HeroesProvider implements HeroProvider {
  private heroes = HEROES_MOCK_DATA;

  getAll(): Observable<any> {
    return of(this.heroes).pipe(delay(240));
  }

  create(hero: Hero): Promise<Hero> {
    return new Promise((resolve) => {
      this.heroes.push(hero);
      resolve(hero);
    });
  }

  query(heroPropValue: any, heroPropName: keyof Hero): Observable<Hero[]> {
    const result = this.heroes.filter(
      (hero) => hero[heroPropName] == heroPropValue
    );
    return of(result).pipe(delay(240));
  }

  update(heroId: string, partialHero: Partial<Hero>): Promise<Hero> {
    return new Promise((resolve) => {
      const heroIndex = this.heroes.findIndex((hero) => hero.id === heroId);
      if (!heroId) throw new Error('Hero not found');
      this.heroes[heroIndex] = {
        ...this.heroes[heroIndex],
        ...partialHero,
      };
      resolve(this.heroes[heroIndex]);
    });
  }

  delete(heroId: string): Promise<Hero> {
    return new Promise((resolve) => {
      this.heroes = [...this.heroes.filter((hero) => hero.id !== heroId)];
      resolve({} as Hero);
    });
  }
}
