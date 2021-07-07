import { Component, OnInit } from '@angular/core';
import { SLIDE_X_SIMPLE } from 'src/app/shared/animations/slide.animation';
import { BREADCRUMB } from './breadcrumb.const';

@Component({
	selector: 'app-breadcrumb-page',
	templateUrl: './breadcrumb.page.html',
	styleUrls: ['./breadcrumb.page.scss'],
	animations: [SLIDE_X_SIMPLE]
})

export class BreadcrumbPage implements OnInit {
	public animate = 'ready';
	public html = {
		breadcrumb: BREADCRUMB
	}

	constructor() { }

	ngOnInit() { }
}
