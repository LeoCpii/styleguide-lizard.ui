import { Component, OnInit } from '@angular/core';
import { SLIDE_X_SIMPLE } from '@/app/shared/animations/slide.animation';
import { BREADCRUMB } from './breadcrumb-overview.const';

@Component({
    selector: 'app-breadcrumb-overview-page',
    templateUrl: './breadcrumb-overview.page.html',
    styleUrls: ['./breadcrumb-overview.page.scss'],
    animations: [SLIDE_X_SIMPLE]
})
export class BreadcrumbOverviewPage implements OnInit {
    public animate = 'ready';
	public html = {
		breadcrumb: BREADCRUMB
	}

    constructor() { }

    ngOnInit() { }
}
