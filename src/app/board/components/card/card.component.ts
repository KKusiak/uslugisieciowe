import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Card } from 'src/app/interfaces/internal.interface';
import { EditCardDialogComponent } from './edit-card-dialog/edit-card-dialog.component';
import { DeleteCardConfirmationModalComponent } from './delete-card-confirmation-modal/delete-card-confirmation-modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() card!:Card
  constructor(public dialog: MatDialog){
    
  }
  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditCardDialogComponent, {
      width:'40%',

      data: {card: this.card},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteCardConfirmationModalComponent, {
      data: {card: this.card},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

