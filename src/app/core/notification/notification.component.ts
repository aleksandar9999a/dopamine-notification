import { Component, OnInit, Input } from '@angular/core';
import { INotification } from 'src/app/interfaces/notification.interface';
import { FirestoreService } from '../services/firestore.service';
import { move } from './notification.animations';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  animations: [move]
})
export class NotificationComponent implements OnInit {
  @Input() data: INotification;
  
  constructor(
    private fs: FirestoreService
  ) { }

  remove() {
    return this.fs.deleteDoc(this.data.id);
  }

  ngOnInit(): void {
  }

}
