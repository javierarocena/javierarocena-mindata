import { Observable } from 'rxjs';
import { Hero } from './hero.model';

export interface HeroProvider {
  getAll(): Observable<Hero[]>;
  update(heroId: string, partialHero: Partial<Hero>): Promise<Hero>;
  delete(heroId: string): Promise<Hero>;
  query(heroPropValue: any, heroPropName: string): Observable<Hero[]>;
}
