import { Component } from '@angular/core';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-service-message-sender',
  standalone: false,
  templateUrl: './service-message-sender.component.html',
  styleUrl: './service-message-sender.component.css'
})
export class ServiceMessageSenderComponent {
  message:string=""
  constructor(private loggerService:LoggerService){

  }
  sendMessage(){
    this.loggerService.setMessage(this.message)
    alert("Message Sent")
  }
}
