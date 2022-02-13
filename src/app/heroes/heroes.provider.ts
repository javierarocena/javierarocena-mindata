import { HEROES_MOCK_DATA } from './mocks/heroes.mock';
import { delay, Observable, of } from 'rxjs';
import { Hero } from './interface/hero.model';
import { HeroProvider } from './interface/hero.provider.model';

export class HeroesProvider implements HeroProvider {
  getAll(): Observable<Hero[]> {
    return of(HEROES_MOCK_DATA).pipe(delay(600));
  }

  getById(heroId: number): Observable<Hero | null> {
    return of(HEROES_MOCK_DATA[0]).pipe(delay(600));
  }

  update(heroId: number, partialHero: Partial<Hero>): Promise<Hero> {
    return new Promise((resolve) => resolve(partialHero as Hero));
  }

  delete(heroId: number): Promise<Hero> {
    return new Promise((resolve) => resolve(null as any));
  }
}
