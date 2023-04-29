import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { BoardService } from '../services/board.service';
import { boardMock } from '../services/mocks';

@Injectable({
  providedIn: 'root'
})
export class BoardResolver implements Resolve<boolean> {
  constructor(private boardService: BoardService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const idBoard = route.params['id'];
    // TODO - get board from API
    this.boardService.currentBoard.next(boardMock)
    return of(true);
  }
}
