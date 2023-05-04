import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewBoardDialogComponent } from '../new-board-dialog/new-board-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public dialog: MatDialog){
    
  }
  openCreateBoardDialog(): void {
    const dialogRef = this.dialog.open(NewBoardDialogComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
