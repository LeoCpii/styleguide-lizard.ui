import { Component, OnInit } from '@angular/core';
import Lizard from 'lizard.ui';
import { SLIDE_Y_STATE } from '../../animations/slide.animation';
import { MENU } from '../../constants/menu.const';
import { version } from './../../../../../package.json';

@Component({
    selector: 'app-nav',
    templateUrl: 'nav.component.html',
    styleUrls: ['nav.component.scss'],
    animations: [SLIDE_Y_STATE],
})

export class NavComponent implements OnInit {    
    private theme: 'light' | 'dark' = 'light';
    public isOpen: boolean;
    public menu = this.sortMenu;

    constructor(private lizard: Lizard) { }

    get version() {
        return version;
    }

    get sortMenu() {
        MENU.sort((a, b) => a.label > b.label ? 1 : - 1)
            .forEach(sub => sub.children.sort((a, b) => a.label > b.label ? 1 : - 1));
        return MENU;
    }

    public toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        this.lizard.set(this.theme);
    }

    public toggleMenuMobile(): void {
        this.isOpen = !this.isOpen;
    }

    ngOnInit() { }
}
