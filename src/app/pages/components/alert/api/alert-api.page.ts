import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SLIDE_X_SIMPLE } from '@/app/shared/animations/slide.animation';
import { BUTTON_SOLID } from './alert-api.const';

@Component({
    selector: 'app-alert-api-page',
    templateUrl: './alert-api.page.html',
    styleUrls: ['./alert-api.page.scss'],
    animations: [SLIDE_X_SIMPLE]
})
export class AlertAPIPage implements OnInit {
    public animate = 'ready';
    public html = {
        solid: BUTTON_SOLID
    };

    constructor(private router: Router) { }

    ngOnInit() { }
}
