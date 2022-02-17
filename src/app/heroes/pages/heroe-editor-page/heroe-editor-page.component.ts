import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeroesService } from '../../heroes.service';
import { Hero } from '../../interface/hero.model';
@Component({
  selector: 'app-heroe-editor-page',
  templateUrl: './heroe-editor-page.component.html',
  styleUrls: ['./heroe-editor-page.component.scss'],
})
export class HeroeEditorPageComponent implements OnInit {
  @Input() hero: Hero = {} as Hero;

  @Output('onSubmit') submitEmitter = new EventEmitter<Hero>();

  constructor(private heroesService: HeroesService) {}

  ngOnInit() {}

  onSubmit(hero: Hero) {
    if (hero.id) {
      this.heroesService.update(hero.id, hero);
    } else {
      this.heroesService.create(hero);
    }
    this.submitEmitter.emit(hero);
  }
}
