import { Component, OnInit } from '@angular/core';
import { SLIDE_Y_SIMPLE } from 'src/app/shared/animations/slide.animation';
import Lizard from 'lizard.ui';

@Component({
    selector: 'app-pallete-page',
    templateUrl: './pallete.page.html',
    styleUrls: ['./pallete.page.scss'],
    animations: [SLIDE_Y_SIMPLE]
})
export class PalletePage implements OnInit {
    public animate = 'ready';

    constructor(private lizard: Lizard) { }

    get colors() {
        return this.lizard.colors;
    }

    get props() {
        return Object.keys(this.colors);
    }

    public getClass(pallete: string): string[] {
        return [`lz-background-${pallete}`];
    }

    ngOnInit() { }
}
