import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  constructor(
    private fs: FirestoreService
  ) { }

  addTextNotification() {
    return this.fs.addDoc({
      type: 'text',
      title: 'Test notification',
      text: 'Test text notification',
      expires: 5
    })
  }

  addBonusNotification() {
    return this.fs.addDoc({
      type: 'Promotion',
      image: 'https://www.freeiconspng.com/uploads/leistungen-promotion-icon-png-0.png',
      title: '%30 off on sports betting',
      link: 'https://www.google.com/',

    })
  }

  addPromotionNotification() {
    return this.fs.addDoc({
      type: 'bonus',
      title: 'You win a bonus!',
      requirement: 'Deposit $50 to win',
      expires: 3600
    })
  }

  ngOnInit(): void {
  }

}
