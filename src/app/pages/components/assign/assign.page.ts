import { Component, OnInit } from '@angular/core';
import { SLIDE_Y_SIMPLE } from 'src/app/shared/animations/slide.animation';

@Component({
    selector: 'app-assign-page',
    templateUrl: './assign.page.html',
    styleUrls: ['./assign.page.scss'],
    animations: [SLIDE_Y_SIMPLE]
})

export class AssignPage implements OnInit {
    public animate = 'ready';

    constructor() { }

    ngOnInit() { }
}
