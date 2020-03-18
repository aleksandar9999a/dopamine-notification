import { trigger, transition, style, animate, state } from '@angular/animations';

export const move = trigger('MoveEffect', [
    state('void', style({
        transform: 'translateX(-30%)',
        opacity: 0
    })),
    transition('void => *', animate('800ms ease-out')),
    transition('* => void', animate('800ms ease-in'))
]);