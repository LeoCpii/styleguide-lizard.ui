import { Component, OnInit } from '@angular/core';
import { SLIDE_Y_SIMPLE } from 'src/app/shared/animations/slide.animation';

@Component({
    selector: 'app-badge-page',
    templateUrl: './badge.page.html',
    styleUrls: ['./badge.page.scss'],
    animations: [SLIDE_Y_SIMPLE]
})

export class BadgePage implements OnInit {
    public animate = 'ready';

    constructor() { }

    ngOnInit() { }
}
