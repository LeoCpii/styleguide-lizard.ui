import { Component, OnInit } from '@angular/core';
import { SLIDE_X_SIMPLE } from '@/app/shared/animations/slide.animation';
import { CARD, CARD_NO_PADDING } from './card-overview.const';

@Component({
    selector: 'app-card-overview-page',
    templateUrl: './card-overview.page.html',
    styleUrls: ['./card-overview.page.scss'],
    animations: [SLIDE_X_SIMPLE]
})
export class CardOverviewPage implements OnInit {
    public animate = 'ready';
	public html = {
		card: CARD,
		card_no_padding: CARD_NO_PADDING
	}

    constructor() { }

    ngOnInit() { }
}
