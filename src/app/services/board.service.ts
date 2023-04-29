import { Injectable } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { Board } from '../interfaces/internal.interface';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  currentBoard = new BehaviorSubject<Board | null>(null);
  currentBoard$ = this.currentBoard.asObservable().pipe(filter(board => board !== null));
  constructor() { }
}
