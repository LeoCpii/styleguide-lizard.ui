import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutRoutingModule } from './layout-routing.module';

// PAGE
import { LayoutPage } from './layout.page';
import { GridPage } from './grid/grid.page';

// FRAGMENT

// SERVICE

const PAGES = [
    LayoutPage,
    GridPage
];

const FRAGMENTS = [];

const PROVIDERS = [];

@NgModule({
    imports: [
        LayoutRoutingModule,
        SharedModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        ...PAGES,
        ...FRAGMENTS,
    ],
    providers: [
        PROVIDERS
    ]
})
export class LayoutModule { }
