import { Component, Input } from '@angular/core';
import { Board } from 'src/app/interfaces/internal.interface';
import { BoardService } from 'src/app/services/board.service';
import { boardMock } from 'src/app/services/mocks';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  constructor(public boardService: BoardService){}
}
