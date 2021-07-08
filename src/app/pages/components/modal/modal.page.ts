import { Component, OnInit } from '@angular/core';
import { SLIDE_X_SIMPLE } from 'src/app/shared/animations/slide.animation';
import { MODAL } from './modal.const';

@Component({
	selector: 'app-modal-page',
	templateUrl: './modal.page.html',
	styleUrls: ['./modal.page.scss'],
	animations: [SLIDE_X_SIMPLE]
})

export class ModalPage implements OnInit {
	public animate = 'ready';
	public html = {
		modal: MODAL,
	}

	constructor() { }

	ngOnInit() { }
}
