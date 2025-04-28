import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-http-user',
  standalone: false,
  templateUrl: './http-user.component.html',
  styleUrl: './http-user.component.css'
})
export class HttpUserComponent implements OnInit{
users:any[]=[]
constructor(private userService: UsersService){}
ngOnInit(): void {
  this.userService.getUsers().subscribe(data=>{
    this.users=data;
  });
}


}

