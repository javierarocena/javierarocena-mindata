import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interface/hero.model';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.scss'],
})
export class HeroItemComponent implements OnInit {
  @Input() hero: Hero = {} as Hero;

  constructor() {}

  ngOnInit() {}
}
