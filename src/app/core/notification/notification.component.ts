import { Component, OnInit, Input } from '@angular/core';
import { INotification } from 'src/app/interfaces/notification.interface';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  @Input() data: INotification;
  
  constructor() { }

  ngOnInit(): void {
  }

}
