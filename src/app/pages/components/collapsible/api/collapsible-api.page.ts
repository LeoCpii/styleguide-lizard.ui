import { Component, OnInit } from '@angular/core';
import { SLIDE_X_SIMPLE } from '@/app/shared/animations/slide.animation';
import { BUTTON_SOLID } from './collapsible-api.const';

@Component({
    selector: 'app-collapsible-api-page',
    templateUrl: './collapsible-api.page.html',
    styleUrls: ['./collapsible-api.page.scss'],
    animations: [SLIDE_X_SIMPLE]
})
export class CollapsibleAPIPage implements OnInit {
    public animate = 'ready';
    public html = {
        solid: BUTTON_SOLID
    };

    constructor() { }

    ngOnInit() { }
}
