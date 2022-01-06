import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

export interface ITab { label: string, route: string; query?: Object; icon?: string }

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.component.html'
})

export class TabsComponent implements OnInit, AfterViewInit, OnDestroy {
    private subscription: Subscription;
    public activeRoute: string;

    @Input() tabs: Array<ITab>;
    @Input('active-tab') activeTab: string;
    @Input('padding-bottom') paddingBottom = false;
    @Input() loading = false;

    @Output() clickEvent = new EventEmitter<ITab>();

    @ViewChild('select', { static: false }) select: ElementRef<HTMLDivElement>;

    constructor(private router: Router) {
        this.subscription = this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                const path = window.location.pathname;
                const arr = path.split('/');
                this.activeRoute = arr[arr.length - 1];
                this.activeTab = this.activeRoute;
                this.initTab();
            }
        });
    }

    public cls(item: ITab): string[] {
        const cls = [];
        const isActive = (this.activeRoute === item.route || this.activeTab === item.route) && !this.loading;
        if (isActive) { cls.push('lz-tabs-item--active'); }
        if (this.paddingBottom) { cls.push('lz-tabs-padding-bottom'); }
        return cls;
    }

    private setBarCss(element: Element) {
        this.select.nativeElement.style.width = `${element['offsetWidth'] + 15}px`;
        this.select.nativeElement.style.left = `${element['offsetLeft'] - 5}px`;
    }

    public clickTab(event: MouseEvent, tab: ITab) {
        this.activeRoute = tab.route;
        this.activeTab = tab.route;
        this.setBarCss(event.target as Element);
        this.clickEvent.emit(tab);
    }

    private initTab() {
        const element = document.querySelector(`#${this.activeTab || this.activeRoute}`);
        if (element) { this.setBarCss(element); }
    }

    ngOnInit() {
        if (!this.activeTab) {
            this.activeRoute = window.location.pathname.split('/')[2];
        }
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    ngAfterViewInit() {
        if (!this.loading) { this.initTab(); }
    }
}
