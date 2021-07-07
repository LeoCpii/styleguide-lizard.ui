import { Component, OnInit } from '@angular/core';
import { SLIDE_X_SIMPLE } from 'src/app/shared/animations/slide.animation';
import { DROPDOWN, DROPDOWN_BLOCK, DROPDOWN_RIGHT } from './dropdown.const';

@Component({
	selector: 'app-dropdown-page',
	templateUrl: './dropdown.page.html',
	styleUrls: ['./dropdown.page.scss'],
	animations: [SLIDE_X_SIMPLE]
})

export class DropdownPage implements OnInit {
	public animate = 'ready';
	public html = {
		dropdown: DROPDOWN,
		left: DROPDOWN_RIGHT,
		block: DROPDOWN_BLOCK
	}

	constructor() { }

	ngOnInit() { }
}
