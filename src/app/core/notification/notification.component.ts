import { Component, OnInit, Input } from '@angular/core';
import { INotification } from 'src/app/interfaces/notification.interface';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
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
    if (this.data.expires) {
      setTimeout(() => {
        this.fs.deleteDoc(this.data.id);
      }, this.data.expires)
    }
  }

}
