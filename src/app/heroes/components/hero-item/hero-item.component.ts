import { ConfirmDialogComponent } from './../../../comunications/dialogs/confirm.dialog.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../../interface/hero.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.scss'],
})
export class HeroItemComponent {
  @Input() hero: Hero = {} as Hero;

  @Output('onDelete') deleteEmitter: EventEmitter<Hero> = new EventEmitter();
  @Output('onEdit') editEmitter: EventEmitter<Hero> = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  onEditBtnPressed(event: MouseEvent) {
    event.stopPropagation();
    this.editEmitter.emit(this.hero);
  }
  onRemoveBtnPressed(event: MouseEvent) {
    event.stopPropagation();
    this.dialog
      .open(ConfirmDialogComponent, {
        width: '250px',
        data: { title: '¿Seguro que quieres borrarlo?', payload: this.hero },
      })
      .afterClosed()
      .subscribe((result) => {
        if (!result) return;
        this.deleteEmitter.emit(this.hero);
      });
  }
}
