import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { NotificationsComponent } from './notifications/notifications.component';



@NgModule({
  declarations: [NavigationComponent, NotificationsComponent],
  imports: [
    CommonModule
  ],
  exports: [NavigationComponent, NotificationsComponent]
})
export class Core { }
