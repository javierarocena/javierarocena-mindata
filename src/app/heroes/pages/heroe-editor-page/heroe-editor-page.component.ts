import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interface/hero.model';

@Component({
  selector: 'app-heroe-editor-page',
  templateUrl: './heroe-editor-page.component.html',
  styleUrls: ['./heroe-editor-page.component.scss'],
})
export class HeroeEditorPageComponent implements OnInit {
  @Input() hero: Hero = {} as Hero;

  constructor() {}

  ngOnInit() {}
}
