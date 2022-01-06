import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Lizard, { TMode, TTheme } from 'lizard.ui';
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

    public form = new FormGroup({
        theme: new FormControl(''),
        mode: new FormControl('')
    });

    constructor(private lizard: Lizard) { }

    get version() {
        return version;
    }

    get sortMenu() {
        MENU.sort((a, b) => a.label > b.label ? 1 : - 1)
            .forEach(sub => sub.children && sub.children.sort((a, b) => a.label > b.label ? 1 : - 1));
        return MENU;
    }

    get themes() {
        return Lizard.themes;
    }

    get modes() {
        return ['light', 'dark'];
    }

    get icon() {
        return this.theme === 'light' ? 'uil-moonset' : 'uil-sunset';
    }

    private setForm() {
        const theme: TTheme = localStorage.getItem('theme') as TTheme;
        const mode: TMode = localStorage.getItem('mode') as TMode;

        this.form.patchValue({ theme , mode});
    }

    public toggleMode() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        this.lizard.setMode(this.theme);
        localStorage.setItem('mode', this.theme);
    }

    public toggleTheme(e: Event): void {
        const theme: TTheme = e.target['value'];
        this.lizard.setTheme(theme);
        localStorage.setItem('theme', theme);
    }

    public toggleMenuMobile(): void {
        this.isOpen = !this.isOpen;
    }

    ngOnInit() {
        this.setForm();
    }
}
