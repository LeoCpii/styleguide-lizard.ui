import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SLIDE_X_SIMPLE } from '@/app/shared/animations/slide.animation';
import { ALERT_ACTION, ALERT_COLORS } from './alert-overview.const';

@Component({
    selector: 'app-alert-overview-page',
    templateUrl: './alert-overview.page.html',
    styleUrls: ['./alert-overview.page.scss'],
    animations: [SLIDE_X_SIMPLE]
})
export class AlertOverviewPage implements OnInit {
    public animate = 'ready';
    public html = {
        colors: ALERT_COLORS,
        action: ALERT_ACTION
    }

    constructor(private router: Router) { }

    ngOnInit() { }
}
