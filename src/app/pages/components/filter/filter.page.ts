import { Component, OnInit } from '@angular/core';
import { SLIDE_X_SIMPLE } from 'src/app/shared/animations/slide.animation';
import { FILTER, } from './filter.const';

@Component({
	selector: 'app-filter-page',
	templateUrl: './filter.page.html',
	styleUrls: ['./filter.page.scss'],
	animations: [SLIDE_X_SIMPLE]
})

export class FilterPage implements OnInit {
	public animate = 'ready';
	public html = {
		filter: FILTER
	}

	constructor() { }

	ngOnInit() { }
}
