import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsRoutingModule } from './components-routing.module';
import { MarkdownModule } from 'ngx-markdown';

// PAGE
import { ComponentsPage } from './components.page';
import { ButtonPage } from './button/button.page';
import { AlertPage } from './alert/alert.page';
import { BadgePage } from './badge/badge.page';
import { FormPage } from './form/form.page';

// FRAGMENT

// SERVICE

const PAGES = [
    ComponentsPage,
    ButtonPage,
    AlertPage,
    BadgePage,
    FormPage
];

const FRAGMENTS = [];

const PROVIDERS = [];

@NgModule({
    imports: [
        MarkdownModule.forChild(),
        ComponentsRoutingModule,
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
export class ComponentsModule { }
