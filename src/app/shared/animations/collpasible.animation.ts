import { trigger, style, transition, animate, query, stagger, state } from '@angular/animations';

export const COLLAPSIBLE_ANIMATION = trigger('openClose', [
    state('open', style({
        height: '*',
    })),
    state('closed', style({
        height: '0px',
    })),
    transition('open => closed', [
        animate('.3s cubic-bezier(0.51, 0.31, 0, 1.01)')
    ]),
    transition('closed => open', [
        animate('.3s cubic-bezier(0.51, 0.31, 0, 1.01)')
    ]),
])