import { Component, OnInit } from '@angular/core';
import { SLIDE_X_SIMPLE } from '@/app/shared/animations/slide.animation';
import { BUTTON_SOLID } from './dropdown-api.const';

@Component({
    selector: 'app-dropdown-api-page',
    templateUrl: './dropdown-api.page.html',
    styleUrls: ['./dropdown-api.page.scss'],
    animations: [SLIDE_X_SIMPLE]
})
export class DropdownAPIPage implements OnInit {
    public animate = 'ready';
    public html = {
        solid: BUTTON_SOLID
    };

    constructor() { }

    ngOnInit() { }
}
