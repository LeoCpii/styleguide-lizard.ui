import { Component, OnInit } from '@angular/core';
import { SLIDE_X_SIMPLE } from '@/app/shared/animations/slide.animation';
import { BADGE_BUTTON, BADGE_COLORS, BADGE_SIZES } from './badge-overview.const';

@Component({
    selector: 'app-badge-overview-page',
    templateUrl: './badge-overview.page.html',
    styleUrls: ['./badge-overview.page.scss'],
    animations: [SLIDE_X_SIMPLE]
})
export class BadgeOverviewPage implements OnInit {
    public animate = 'ready';
    public html = {
        sizes: BADGE_SIZES,
        button: BADGE_BUTTON,
        colors: BADGE_COLORS
    }

    constructor() { }

    ngOnInit() { }
}

