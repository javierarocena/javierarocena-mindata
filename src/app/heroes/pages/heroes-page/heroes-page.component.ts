import { HeroesService } from './../../heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-page',
  templateUrl: './heroes-page.component.html',
  styleUrls: ['./heroes-page.component.scss'],
})
export class HeroesPageComponent implements OnInit {
  heroes: any = [];
  isLoading: boolean = false;

  constructor(private heroesService: HeroesService) {}

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
}
