import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Project';
 fruits=[
  {name:"Apple", isFavourite:true},
  {name:"Orange", isFavourite:false}
 ]
  temperature=40;
  }

