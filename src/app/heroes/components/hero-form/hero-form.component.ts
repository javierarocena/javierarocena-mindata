import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Hero } from '../../interface/hero.model';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
})
export class HeroFormComponent implements OnChanges {
  @Input() hero: Hero = {} as Hero;
  @Output('onSubmit') submitEmitter = new EventEmitter<Hero>();

  HERO_INPUTS = [
    {
      name: 'Nombre',
      id: 'name',
      icon: 'face',
    },
    {
      name: 'Main color',
      id: 'color',
      type: 'color',
      icon: 'visibility',
    },
    {
      name: 'Date',
      id: 'date',
      type: 'date',
      icon: 'event',
    },
    {
      name: 'Height',
      id: 'height',
      type: 'number',
      icon: 'height',
    },
  ];

  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    color: new FormControl(''),
    date: new FormControl(new Date()),
    height: new FormControl(''),
  });

  ngOnChanges() {
    this.profileForm.patchValue(this.hero);
  }

  onSubmit() {
    this.submitEmitter.emit({
      id: this.hero.id,
      ...this.profileForm.value,
    });
  }
}
