import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardsListComponent } from './components/boards-list/boards-list.component';
import { BoardComponent } from './board/components/board/board.component';
import { BoardResolver } from './board/board.resolver';

const routes: Routes = [
  {path: 'boards', component: BoardsListComponent},
  {path: 'board/:id', component:BoardComponent ,resolve:[BoardResolver],loadChildren: () => import('./board/board.module').then(m => m.BoardModule)},
  {path: '**', redirectTo: 'boards', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
