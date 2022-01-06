import { Component, OnInit } from '@angular/core';
import { SLIDE_X_SIMPLE } from '@/app/shared/animations/slide.animation';
import { ASSIGN } from './assign-overview.const';

@Component({
    selector: 'app-assign-overview-page',
    templateUrl: './assign-overview.page.html',
    styleUrls: ['./assign-overview.page.scss'],
    animations: [SLIDE_X_SIMPLE]
})
export class AssignOverviewPage implements OnInit {
    public animate = 'ready';
    public html = {
        assing: ASSIGN
    }

    constructor() { }

    ngOnInit() { }
}
