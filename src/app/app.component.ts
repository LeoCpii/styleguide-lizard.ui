import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Lizard, { TMode, TTheme } from 'lizard.ui';
import { ITab } from './shared/components/tabs/tabs.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private lizard: Lizard) {
        const theme: TTheme = localStorage.getItem('theme') as TTheme;
        const mode: TMode = localStorage.getItem('mode') as TMode;

        if (mode) { lizard.setMode(mode); }
        if (theme) { lizard.setTheme(theme); }
    }

    title = 'styleguide-lizard-ui';
}
