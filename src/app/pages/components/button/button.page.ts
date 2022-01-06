import { Component, OnInit } from '@angular/core';
import { SLIDE_Y_SIMPLE } from '@/app/shared/animations/slide.animation';

@Component({
    selector: 'app-button-page',
    templateUrl: './button.page.html',
    styleUrls: ['./button.page.scss'],
    animations: [SLIDE_Y_SIMPLE]
})
export class ButtonPage implements OnInit {
    public animate = 'ready';

    constructor() { }

    ngOnInit() { }
}
