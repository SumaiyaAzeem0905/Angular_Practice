import { Component } from '@angular/core';


@Component({
  selector: 'app-data-binding',
  standalone: false,
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
    //Interpolation
  name:string="Sumaiya"
  rollNo:number=1234
  student={
    name: "Sumaiya",
    age:22,
    course:"Full Stack"
  }
  constructor(){
    //Interpolation
    this.name="Sumaiya"
    this.rollNo=1234
    this.student={
      name: "Sumaiya",
      age:22,
      course:"Full Stack"
    }
  }

  //Property Binding
  placeholder:string="Enter your name"

  //Event Binding
  showStudentDetails(){
    alert("Name: "+this.student.name+" Age: "+this.student.age+" Course: "+this.student.course)
  }
  onSelect(){
    alert("Selected")

  }
  //Two Way Data Binding
  selectedName:string=""

}
