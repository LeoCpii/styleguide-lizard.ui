import { Component, OnInit } from '@angular/core';
import { MENU, IMenu } from '@/app/shared/constants/menu.const';
import { Router } from '@angular/router';
import { LIST_ANIMATION_LATERAL } from '@/app/shared/animations/list.animation';
import { COLLAPSIBLE_ANIMATION } from '@/app/shared/animations/collpasible.animation';

@Component({
    selector: 'app-side-nav',
    templateUrl: 'side-nav.component.html',
    styleUrls: ['side-nav.component.scss'],
    animations: [LIST_ANIMATION_LATERAL, COLLAPSIBLE_ANIMATION]
})

export class SideNavComponent implements OnInit {
    public menu = this.sortMenu;
    public isOpen = false;

    constructor(private router: Router) {
        router.events.subscribe(event => this.manager());
    }

    get state() {
        return this.isOpen ? 'open' : 'closed';
    }

    get sortMenu() {
        MENU.sort((a, b) => a.label > b.label ? 1 : - 1)
            .forEach(sub => sub.children.sort((a, b) => a.label > b.label ? 1 : - 1));
        return MENU;
    }

    public active(url: string) {
        return window.location.href.includes(url) ? 'primary' : 'light';
    }

    public verify(button: IMenu) {
        const isValid = button.children && button.children.length;
        if (isValid) { button.open ? this.close(button.url) : this.open(button.url) };
    }

    private open(url: string) {
        MENU.forEach(btn => {
            if (btn.url === url) { btn.open = true }
        });
    }

    private close(url: string) {
        MENU.forEach(btn => {
            if (btn.url === url) { btn.open = false }
        });
    }

    public manager() {
        MENU.forEach(btn => btn.open = window.location.href.includes(btn.url));
    }

    ngOnInit() { this.manager(); }
}
