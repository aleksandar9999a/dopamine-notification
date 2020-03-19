import { trigger, transition, style, animate, state } from '@angular/animations';

export const fade = trigger('FadeEffect', [
    state('void', style({
        transform: 'translateY(0%)',
        opacity: 0
    })),
    transition('void => *', animate('800ms ease-out')),
    transition('* => void', animate('500ms ease-in'))
]);