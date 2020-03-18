import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationComponent } from './notification/notification.component';



@NgModule({
  declarations: [NavigationComponent, NotificationsComponent, NotificationComponent],
  imports: [
    CommonModule
  ],
  exports: [NavigationComponent, NotificationsComponent]
})
export class Core { }
