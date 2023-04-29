import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boards-list',
  templateUrl: './boards-list.component.html',
  styleUrls: ['./boards-list.component.css']
})
export class BoardsListComponent {
  constructor(private router:Router){}
  dataSource = [
    {id: 1, name: 'Board 1'},
    {id: 2, name: 'Board 2'},
    {id: 3, name: 'Board 3'},
    {id: 4, name: 'Board 4'},
    {id: 5, name: 'Board 5'},
  ]
  displayedColumns = ['id', 'name'];
  openBoard(idBoard:number){
    this.router.navigate(['/board', idBoard])
  }
}
