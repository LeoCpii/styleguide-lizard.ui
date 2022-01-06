import { Component, OnInit } from '@angular/core';
import { SLIDE_Y_SIMPLE } from 'src/app/shared/animations/slide.animation';
@Component({
	selector: 'app-collapsible-page',
	templateUrl: './collapsible.page.html',
	styleUrls: ['./collapsible.page.scss'],
	animations: [SLIDE_Y_SIMPLE]
})

export class CollapsiblePage implements OnInit {
	public animate = 'ready';

	constructor() { }

	ngOnInit() { }
}
