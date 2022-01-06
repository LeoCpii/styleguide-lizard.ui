import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SLIDE_Y_SIMPLE } from 'src/app/shared/animations/slide.animation';
import { ITab } from '@/app/shared/components/tabs/tabs.component';

@Component({
    selector: 'app-components-page',
    templateUrl: './components.page.html',
    styleUrls: ['./components.page.scss'],
    animations: [SLIDE_Y_SIMPLE]
})
export class ComponentsPage implements OnInit {
    public animate = 'ready';
    public tabs: ITab[] = [
        {
            label: 'Overview',
            route: 'overview'
        },
        {
            label: 'API',
            route: 'api'
        }
    ];

    constructor(private router: Router) { }

    public go(tab: ITab): void {
        const arr = this.router.url.split('/');
        this.router.navigate(['components',  arr[2], tab.route]);
    }

    ngOnInit() { }
}
