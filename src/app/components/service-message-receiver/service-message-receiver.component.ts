import { Component } from '@angular/core';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-service-message-receiver',
  standalone: false,
  templateUrl: './service-message-receiver.component.html',
  styleUrl: './service-message-receiver.component.css'
})
export class ServiceMessageReceiverComponent {
   constructor(public loggerService:LoggerService){}
}
