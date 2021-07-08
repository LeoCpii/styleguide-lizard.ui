import { Component, OnInit } from '@angular/core';
import { SLIDE_X_SIMPLE } from 'src/app/shared/animations/slide.animation';
import { ITEM } from './item.const';

@Component({
	selector: 'app-item-page',
	templateUrl: './item.page.html',
	styleUrls: ['./item.page.scss'],
	animations: [SLIDE_X_SIMPLE]
})

export class ItemPage implements OnInit {
	public animate = 'ready';
	public html = {
		item: ITEM
	}

	constructor() { }

	ngOnInit() { }
}
