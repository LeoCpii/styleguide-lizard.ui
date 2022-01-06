import { Component, OnInit } from '@angular/core';
import { SLIDE_Y_SIMPLE } from 'src/app/shared/animations/slide.animation';
import { LIST } from './list.const';

@Component({
	selector: 'app-list-page',
	templateUrl: './list.page.html',
	styleUrls: ['./list.page.scss'],
	animations: [SLIDE_Y_SIMPLE]
})

export class ListPage implements OnInit {
	public animate = 'ready';
	public html = {
		item: LIST
	}

	constructor() { }

	ngOnInit() { }
}
