import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipes';
  students = [
    { name: 'Vishak', gender: 'male' },
    { name: 'Sandra', gender: 'female' },
    { name: 'James', gender: 'male' },
    { name: 'Jerry', gender: 'male' },
    { name: 'Ruby', gender: 'female' }
  ];
  date: Date = new Date();
}
