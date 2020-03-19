import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { INotification } from 'src/app/interfaces/notification.interface';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit, OnDestroy {
  @Input() data: INotification;
  interval: NodeJS.Timeout;

  constructor(
    private fs: FirestoreService
  ) { }

  remove() {
    return this.fs.deleteDoc(this.data.id);
  }

  ngOnInit(): void {
    if (this.data.expires) {
      this.interval = setTimeout(() => {
        this.fs.deleteDoc(this.data.id);
      }, this.data.expires)
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
