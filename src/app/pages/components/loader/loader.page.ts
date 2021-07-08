import { Component, OnInit } from '@angular/core';
import { SLIDE_X_SIMPLE } from 'src/app/shared/animations/slide.animation';
import { LOADER } from './loader.const';

@Component({
	selector: 'app-loader-page',
	templateUrl: './loader.page.html',
	styleUrls: ['./loader.page.scss'],
	animations: [SLIDE_X_SIMPLE]
})

export class LoaderPage implements OnInit {
	public animate = 'ready';
	public html = {
		loader: LOADER
	}

	constructor() { }

	ngOnInit() { }
}
