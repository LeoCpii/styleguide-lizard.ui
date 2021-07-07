import { Component, OnInit } from '@angular/core';
import { SLIDE_X_SIMPLE } from 'src/app/shared/animations/slide.animation';
import { COLLAPSIBLE } from './collapsible.const';

@Component({
	selector: 'app-collapsible-page',
	templateUrl: './collapsible.page.html',
	styleUrls: ['./collapsible.page.scss'],
	animations: [SLIDE_X_SIMPLE]
})

export class CollapsiblePage implements OnInit {
	public animate = 'ready';
	public html = {
		collapsible: COLLAPSIBLE
	}

	constructor() { }

	ngOnInit() { }
}
