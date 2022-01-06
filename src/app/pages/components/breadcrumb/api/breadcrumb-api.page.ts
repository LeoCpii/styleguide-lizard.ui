import { Component, OnInit } from '@angular/core';
import { SLIDE_X_SIMPLE } from '@/app/shared/animations/slide.animation';
import { BUTTON_SOLID } from './breadcrumb-api.const';

@Component({
    selector: 'app-breadcrumb-api-page',
    templateUrl: './breadcrumb-api.page.html',
    styleUrls: ['./breadcrumb-api.page.scss'],
    animations: [SLIDE_X_SIMPLE]
})
export class BreadcrumbAPIPage implements OnInit {
    public animate = 'ready';
    public html = {
        solid: BUTTON_SOLID
    };

    constructor() { }

    ngOnInit() { }
}
