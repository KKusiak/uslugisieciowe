import { CdkDragDrop,moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Card, Column } from 'src/app/interfaces/internal.interface';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent {
  newCardTitle:FormControl = new FormControl("")
  @Input() column!:Column
  test(event:CdkDragDrop<Card[]>){
    if (event.previousContainer === event.container) {
      // TOOD wysłać request zmieniający kolejność kart
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // TODO wysłać request przesuwający kartę
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  add(title:string){
    console.log(title)
    this.newCardTitle.setValue("")
    this.newCardTitle.markAsUntouched();
  }
}
