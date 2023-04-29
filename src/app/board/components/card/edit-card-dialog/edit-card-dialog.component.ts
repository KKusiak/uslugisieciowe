import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Card, User } from 'src/app/interfaces/internal.interface';

@Component({
  selector: 'app-edit-card-dialog',
  templateUrl: './edit-card-dialog.component.html',
  styleUrls: ['./edit-card-dialog.component.css']
})
export class EditCardDialogComponent {
  card:Card = this.data.card;
  constructor(
    public dialogRef: MatDialogRef<EditCardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
  ) {
    console.log(data);
  }

  onNoClick(): void {

    this.dialogRef.close();
  }
  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }
}
