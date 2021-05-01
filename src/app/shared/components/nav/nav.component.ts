import { Component, OnInit } from '@angular/core';
import Theme from 'lizard.ui';

@Component({
    selector: 'app-nav',
    templateUrl: 'nav.component.html',
    styleUrls: ['nav.component.scss']
})

export class NavComponent implements OnInit {    
    private theme: 'light' | 'dark' = 'light';

    constructor(private t: Theme) { }

    public toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        this.t.set(this.theme);
    }

    ngOnInit() { }
}
