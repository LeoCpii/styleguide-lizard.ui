import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SLIDE_X_SIMPLE } from '@/app/shared/animations/slide.animation';
import { BUTTON_SOLID } from './button-api.const';

@Component({
    selector: 'app-button-api-page',
    templateUrl: './button-api.page.html',
    styleUrls: ['./button-api.page.scss'],
    animations: [SLIDE_X_SIMPLE]
})
export class ButtonAPIPage implements OnInit {
    public animate = 'ready';
    public html = {
        solid: BUTTON_SOLID
    };

    constructor(private router: Router) { }

    public go(tab: any): void {
        this.router.navigate(['configuration', tab.route]);
    }

    ngOnInit() { }
}
