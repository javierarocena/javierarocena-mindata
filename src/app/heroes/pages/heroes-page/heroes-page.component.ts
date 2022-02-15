import { HeroesService } from './../../heroes.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from '../../interface/hero.model';
import { Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-heroes-page',
  templateUrl: './heroes-page.component.html',
  styleUrls: ['./heroes-page.component.scss'],
})
export class HeroesPageComponent implements OnInit {
  heroes: Hero[] = [];
  isLoading: boolean = false;
  heroEditing: Hero | undefined;

  @ViewChild('drawer') drawerComponent: MatDrawer | undefined;

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

  searchHero(searchTerm: string | undefined) {
    this.drawerComponent?.close();
    return this.heroesService.search(searchTerm).subscribe((heroes) => {
      this.heroes = heroes;
    });
  }

  editHero(hero: Hero) {
    const newName = prompt('hola');
    if (!newName) return;
    this.heroesService.update(hero.id, { name: newName });
    this.loadHeroes();
  }

  showEditor(hero: Hero) {
    this.drawerComponent?.open();
    this.heroEditing = hero;
  }

  deleteHero(hero: Hero) {
    this.drawerComponent?.close();
    this.heroesService.delete(hero.id);
    this.loadHeroes();
  }

  onHeroSelect(hero: Hero) {
    this.router.navigateByUrl(`/heroes/${hero.id}`);
  }

  onCreateHero() {
    this.heroEditing = {
      id: 'new',
      name: 'Nuevo héroe',
    };
    this.drawerComponent?.open();
  }
}
