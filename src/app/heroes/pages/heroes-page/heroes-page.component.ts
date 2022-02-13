import { HeroesService } from './../../heroes.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interface/hero.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-page',
  templateUrl: './heroes-page.component.html',
  styleUrls: ['./heroes-page.component.scss'],
})
export class HeroesPageComponent implements OnInit {
  heroes: Hero[] = [];
  isLoading: boolean = false;

  constructor(private heroesService: HeroesService, private router: Router) {}

  ngOnInit() {
    this.loadHeroes();
  }

  private async loadHeroes() {
    this.isLoading = true;
    this.heroesService.getAll().subscribe((heroes) => {
      this.isLoading = false;
      this.heroes = heroes;
    });
  }

  onHeroEdit(hero: Hero) {
    alert('Vas a editar ' + hero.name);
  }

  onHeroDelete(hero: Hero) {
    alert('Vas a borrar ' + hero.name);
  }

  onHeroSelect(hero: Hero) {
    this.router.navigateByUrl(`/heroes/${hero.name}`);
  }
}
