import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './components/board/board.component';
import { ColumnComponent } from './components/column/column.component';
import { CardComponent } from './components/card/card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatDialogModule} from '@angular/material/dialog';
import { EditCardDialogComponent } from './components/card/edit-card-dialog/edit-card-dialog.component'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { DeleteCardConfirmationModalComponent } from './components/card/delete-card-confirmation-modal/delete-card-confirmation-modal.component'; 
@NgModule({
  declarations: [
    BoardComponent,
    ColumnComponent,
    CardComponent,
    EditCardDialogComponent,
    DeleteCardConfirmationModalComponent,
  ],
  imports: [
    CommonModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  exports:[
    BoardComponent
  ]
})
export class BoardModule { }
