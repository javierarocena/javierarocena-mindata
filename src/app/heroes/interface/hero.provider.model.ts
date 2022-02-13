import { Observable } from 'rxjs';
import { Hero } from './hero.model';

export interface HeroProvider {
  getAll(): Observable<Hero[]>;
  getById(heroId: number): Observable<Hero | null>;
  update(heroId: number, partialHero: Partial<Hero>): Promise<Hero>;
  delete(heroId: number): Promise<Hero>;
}
