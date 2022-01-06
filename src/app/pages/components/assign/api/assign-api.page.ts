import { Component, OnInit } from '@angular/core';
import { SLIDE_X_SIMPLE } from '@/app/shared/animations/slide.animation';
import { BUTTON_SOLID } from './assign-api.const';

@Component({
    selector: 'app-assign-api-page',
    templateUrl: './assign-api.page.html',
    styleUrls: ['./assign-api.page.scss'],
    animations: [SLIDE_X_SIMPLE]
})
export class AssignAPIPage implements OnInit {
    public animate = 'ready';
    public html = {
        solid: BUTTON_SOLID
    };

    constructor() { }

    ngOnInit() { }
}
