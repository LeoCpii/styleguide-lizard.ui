import { Component, OnInit } from '@angular/core';
import { SLIDE_Y_SIMPLE } from 'src/app/shared/animations/slide.animation';
import { LOADER, LOADER_CENTERING } from './loader.const';

@Component({
	selector: 'app-loader-page',
	templateUrl: './loader.page.html',
	styleUrls: ['./loader.page.scss'],
	animations: [SLIDE_Y_SIMPLE]
})

export class LoaderPage implements OnInit {
	public animate = 'ready';
	public html = {
		loader: LOADER,
		loader_centering: LOADER_CENTERING
	}

	constructor() { }

	ngOnInit() { }
}
