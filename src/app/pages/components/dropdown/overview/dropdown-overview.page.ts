import { Component, OnInit } from '@angular/core';
import { SLIDE_X_SIMPLE } from '@/app/shared/animations/slide.animation';
import { DROPDOWN, DROPDOWN_RIGHT, DROPDOWN_BLOCK } from './dropdown-overview.const';

@Component({
    selector: 'app-dropdown-overview-page',
    templateUrl: './dropdown-overview.page.html',
    styleUrls: ['./dropdown-overview.page.scss'],
    animations: [SLIDE_X_SIMPLE]
})
export class DropdownOverviewPage implements OnInit {
    public animate = 'ready';
	public html = {
		dropdown: DROPDOWN,
		left: DROPDOWN_RIGHT,
		block: DROPDOWN_BLOCK
	}

    constructor() { }

    ngOnInit() { }
}
