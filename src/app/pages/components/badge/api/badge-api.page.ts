import { Component, OnInit } from '@angular/core';
import { SLIDE_X_SIMPLE } from '@/app/shared/animations/slide.animation';
import { BUTTON_SOLID } from './badge-api.const';

@Component({
    selector: 'app-badge-api-page',
    templateUrl: './badge-api.page.html',
    styleUrls: ['./badge-api.page.scss'],
    animations: [SLIDE_X_SIMPLE]
})
export class BadgeAPIPage implements OnInit {
    public animate = 'ready';
    public html = {
        solid: BUTTON_SOLID
    };

    constructor() { }

    ngOnInit() { }
}
