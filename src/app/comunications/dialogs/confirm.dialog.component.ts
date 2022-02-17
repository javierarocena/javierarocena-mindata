import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogRequest } from './confirm.dialog.model';

@Component({
  selector: 'confirm.dialog.component',
  templateUrl: 'confirm.dialog.component.html',
})
export class ConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogRequest>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogRequest
  ) {}
}
