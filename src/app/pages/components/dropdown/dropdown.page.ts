import { Component, OnInit } from '@angular/core';
import { SLIDE_Y_SIMPLE } from 'src/app/shared/animations/slide.animation';

@Component({
	selector: 'app-dropdown-page',
	templateUrl: './dropdown.page.html',
	styleUrls: ['./dropdown.page.scss'],
	animations: [SLIDE_Y_SIMPLE]
})

export class DropdownPage implements OnInit {
	public animate = 'ready';

	constructor() { }

	ngOnInit() { }
}
