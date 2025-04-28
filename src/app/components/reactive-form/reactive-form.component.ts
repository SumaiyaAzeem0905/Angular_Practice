import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  standalone: false,
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required, Validators.min(18)])
  });

  onSubmit() {
    if (this.userForm.valid) {
      const { name, email, age } = this.userForm.value;
      alert(`Form submitted!
Name: ${name}
Email: ${email}
Age: ${age}`);
    } else {
      alert('Please fill all required fields correctly!');
    }
  }
}

