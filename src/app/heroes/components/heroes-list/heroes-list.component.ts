import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../../interface/hero.model';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent {
  @Input() heroes: Hero[] = [];

  termSearch: string | undefined;

  @Output('onHeroSelect') heroSelectEmitter: EventEmitter<Hero> =
    new EventEmitter();

  @Output('onHeroEdit') heroEditEmitter: EventEmitter<Hero> =
    new EventEmitter();

  @Output('onHeroDelete') heroDeleteEmitter: EventEmitter<Hero> =
    new EventEmitter();

  @Output('onSearch') heroSearchEmitter: EventEmitter<string | undefined> =
    new EventEmitter();

  @Output('onCreate') heroCreateEmitter: EventEmitter<void> =
    new EventEmitter();

  onSearchInputChange(event: Event) {
    this.heroSearchEmitter.emit((event.target as HTMLInputElement).value);
  }

  onClear() {
    this.termSearch = '';
    this.heroSearchEmitter.emit('');
  }
}
