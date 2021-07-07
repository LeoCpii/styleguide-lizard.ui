import { Component, OnInit } from '@angular/core';
import { SLIDE_X_SIMPLE } from 'src/app/shared/animations/slide.animation';
import { ASSIGN } from './assign.const';

@Component({
    selector: 'app-assign-page',
    templateUrl: './assign.page.html',
    styleUrls: ['./assign.page.scss'],
    animations: [SLIDE_X_SIMPLE]
})

export class AssignPage implements OnInit {
    public animate = 'ready';
    public html = {
        assing: ASSIGN
    }

    constructor() { }

    ngOnInit() { }
}
