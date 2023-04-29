import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Card } from 'src/app/interfaces/internal.interface';

@Component({
  selector: 'app-delete-card-confirmation-modal',
  templateUrl: './delete-card-confirmation-modal.component.html',
  styleUrls: ['./delete-card-confirmation-modal.component.css']
})
export class DeleteCardConfirmationModalComponent {
  card:Card = this.data.card;
  constructor(
    public dialogRef: MatDialogRef<DeleteCardConfirmationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
  ) {
    console.log(data);
  }

}
