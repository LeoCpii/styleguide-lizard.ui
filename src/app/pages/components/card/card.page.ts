import { Component, OnInit } from '@angular/core';
import { SLIDE_X_SIMPLE } from 'src/app/shared/animations/slide.animation';
import { CARD, CARD_NO_PADDING } from './card.const';

@Component({
	selector: 'app-card-page',
	templateUrl: './card.page.html',
	styleUrls: ['./card.page.scss'],
	animations: [SLIDE_X_SIMPLE]
})

export class CardPage implements OnInit {
	public animate = 'ready';
	public html = {
		card: CARD,
		card_no_padding: CARD_NO_PADDING
	}

	constructor() { }

	ngOnInit() { }
}
