import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../../interface/hero.model';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.scss'],
})
export class HeroItemComponent {
  @Input() hero: Hero = {} as Hero;

  @Output('onDelete') deleteEmitter: EventEmitter<Hero> = new EventEmitter();
  @Output('onEdit') editEmitter: EventEmitter<Hero> = new EventEmitter();
}
