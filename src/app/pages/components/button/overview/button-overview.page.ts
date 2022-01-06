import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SLIDE_X_SIMPLE } from '@/app/shared/animations/slide.animation';
import { BUTTON_NO_STROKE, BUTTON_OUTLINE, BUTTON_SOLID, BUTTON_SIZE, BUTTON_STATE, BUTTON_ICON } from './button-overview.const';

@Component({
    selector: 'app-button-overview-page',
    templateUrl: './button-overview.page.html',
    styleUrls: ['./button-overview.page.scss'],
    animations: [SLIDE_X_SIMPLE]
})
export class ButtonOverviewPage implements OnInit {
    public animate = 'ready';
    public html = {
        solid: BUTTON_SOLID,
        outline: BUTTON_OUTLINE,
        noStroke: BUTTON_NO_STROKE,
        size: BUTTON_SIZE,
        state: BUTTON_STATE,
        icon: BUTTON_ICON
    };

    constructor(private router: Router) { }

    public go(tab: any): void {
        this.router.navigate(['configuration', tab.route]);
    }

    ngOnInit() { }
}
