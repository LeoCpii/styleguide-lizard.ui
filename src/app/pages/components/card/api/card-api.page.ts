import { Component, OnInit } from '@angular/core';
import { SLIDE_X_SIMPLE } from '@/app/shared/animations/slide.animation';
import { BUTTON_SOLID } from './card-api.const';

@Component({
    selector: 'app-card-api-page',
    templateUrl: './card-api.page.html',
    styleUrls: ['./card-api.page.scss'],
    animations: [SLIDE_X_SIMPLE]
})
export class CardAPIPage implements OnInit {
    public animate = 'ready';
    public html = {
        solid: BUTTON_SOLID
    };

    constructor() { }

    ngOnInit() { }
}
