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
import { AssignPage } from './assign/assign.page';
import { BreadcrumbPage } from './breadcrumb/breadcrumb.page';
import { CardPage } from './card/card.page';
import { CollapsiblePage } from './collapsible/collapsible.page';
import { DropdownPage } from './dropdown/dropdown.page';
import { FilterPage } from './filter/filter.page';
import { ItemPage } from './item/item.page';
import { ListPage } from './list/list.page';
import { LoaderPage } from './loader/loader.page';

// FRAGMENT

// SERVICE

const PAGES = [
    ComponentsPage,
    ButtonPage,
    AlertPage,
    BadgePage,
    FormPage,
    AssignPage,
    BreadcrumbPage,
    CardPage,
    CollapsiblePage,
    DropdownPage,
    FilterPage,
    ItemPage,
    ListPage,
    LoaderPage
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
