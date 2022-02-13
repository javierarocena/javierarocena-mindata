import { Hero } from './../../interface/hero.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../heroes.service';

@Component({
  selector: 'app-heroe-detail-page',
  templateUrl: './heroe-detail-page.component.html',
  styleUrls: ['./heroe-detail-page.component.scss'],
})
export class HeroeDetailPageComponent implements OnInit {
  heroDetail: Hero = {} as Hero;
  isLoading: boolean = true;

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadHeroDetail();
  }

  private loadHeroDetail() {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.isLoading = true;
      this.heroesService.getById(id).subscribe((hero) => {
        this.heroDetail = hero as Hero;
        this.isLoading = false;
      });
    });
  }
}
