import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interface/hero.model';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent implements OnInit {
  @Input() heroes: Hero[] = [];

  constructor() {}

  ngOnInit() {}
}
