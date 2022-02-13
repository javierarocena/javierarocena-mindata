import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../../interface/hero.model';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent {
  @Input() heroes: Hero[] = [];

  @Output('onHeroEdit') heroEditEmitter: EventEmitter<Hero> =
    new EventEmitter();
  @Output('onHeroDelete') heroDeleteEmitter: EventEmitter<Hero> =
    new EventEmitter();
}
