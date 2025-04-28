import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  standalone: false,
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
  user={
    name:"",
    email:"",
    age:null

  }
  onSubmit(){
    alert(`Form submitted!
      Name: ${this.user.name}
      Email: ${this.user.email}
      Age: ${this.user.age}`);
      
  }

}
