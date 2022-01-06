import { Component, OnInit } from '@angular/core';
import { SLIDE_Y_SIMPLE } from 'src/app/shared/animations/slide.animation';
import { TABLE } from './table.const';

@Component({
	selector: 'app-table-page',
	templateUrl: './table.page.html',
	styleUrls: ['./table.page.scss'],
	animations: [SLIDE_Y_SIMPLE]
})

export class TablePage implements OnInit {
	public animate = 'ready';
	public html = {
		table: TABLE,
	}

	constructor() { }

	ngOnInit() { }
}
