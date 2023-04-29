import { Component } from '@angular/core';
import { boardMock } from './services/mocks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  boardMock = boardMock

}
