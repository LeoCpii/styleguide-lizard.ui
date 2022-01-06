import { Component, OnInit } from '@angular/core';
import { SLIDE_X_SIMPLE } from '@/app/shared/animations/slide.animation';
import { COLLAPSIBLE } from './collapsible-overview.const';

@Component({
    selector: 'app-collapsible-overview-page',
    templateUrl: './collapsible-overview.page.html',
    styleUrls: ['./collapsible-overview.page.scss'],
    animations: [SLIDE_X_SIMPLE]
})
export class CollapsibleOverviewPage implements OnInit {
    public animate = 'ready';
	public html = {
		collapsible: COLLAPSIBLE
	}

    constructor() { }

    ngOnInit() { }
}
