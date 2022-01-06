import { Component, OnInit } from '@angular/core';
import { SLIDE_Y_SIMPLE } from 'src/app/shared/animations/slide.animation';
import { ITEM, ITEM_DELIMITER } from './item.const';

@Component({
	selector: 'app-item-page',
	templateUrl: './item.page.html',
	styleUrls: ['./item.page.scss'],
	animations: [SLIDE_Y_SIMPLE]
})

export class ItemPage implements OnInit {
	public animate = 'ready';
	public html = {
		item: ITEM,
		delimiter: ITEM_DELIMITER
	}

	constructor() { }

	ngOnInit() { }
}
