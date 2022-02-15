import { HEROES_MOCK_DATA } from './mocks/heroes.mock';
import { delay, Observable, of } from 'rxjs';
import { Hero } from './interface/hero.model';
import { HeroProvider } from './interface/hero.provider.model';

export class HeroesProvider implements HeroProvider {
  getAll(): Observable<Hero[]> {
    return of(HEROES_MOCK_DATA).pipe(delay(600));
  }

  query(heroPropValue: any, heroPropName: keyof Hero): Observable<Hero[]> {
    const result = HEROES_MOCK_DATA.filter(
      (hero) => hero[heroPropName] == heroPropValue
    );
    return of(result).pipe(delay(600));
  }

  update(heroId: string, partialHero: Partial<Hero>): Promise<Hero> {
    return new Promise((resolve) => resolve(partialHero as Hero));
  }

  delete(heroId: string): Promise<Hero> {
    return new Promise((resolve) => resolve(null as any));
  }
}
