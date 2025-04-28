import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: false,
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  //ngIf
   isLoggedIn: boolean = false;
   checkProduct: boolean = true;
  //ngFor
   favouriteFruits: string[] = ['Apple', 'Banana', 'Mango', 'Orange'];
  //ngSwitch
  selectedWeather: string = 'Rainy';
  //ngClass
  resultStatus: string = "pass"; 
  //ngStyle
  fontSize: string = '20px';
  bgColor: string = 'lightblue';
}
