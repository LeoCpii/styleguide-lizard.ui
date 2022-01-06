import { Component, OnInit } from '@angular/core';
import { SLIDE_Y_SIMPLE } from 'src/app/shared/animations/slide.animation';

@Component({
	selector: 'app-breadcrumb-page',
	templateUrl: './breadcrumb.page.html',
	styleUrls: ['./breadcrumb.page.scss'],
	animations: [SLIDE_Y_SIMPLE]
})

export class BreadcrumbPage implements OnInit {
	public animate = 'ready';

	constructor() { }

	ngOnInit() { }
}
