import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable()
export class MenuService { 
    isOpen = false;
    @Output() state = new EventEmitter();

    toggle() {
      this.isOpen = !this.isOpen;
      this.state.emit(this.isOpen);
    }

}