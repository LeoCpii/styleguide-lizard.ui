import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsRoutingModule } from './components-routing.module';
import { MarkdownModule } from 'ngx-markdown';

// PAGE
import { ComponentsPage } from './components.page';
// BUTTON
import { ButtonPage } from './button/button.page';
import { ButtonOverviewPage } from './button/overview/button-overview.page';
import { ButtonAPIPage } from './button/api/button-api.page';
// ALERTS
import { AlertPage } from './alert/alert.page';
import { AlertOverviewPage } from './alert/overview/alert-overview.page';
import { AlertAPIPage } from './alert/api/alert-api.page';
// ASSIGN
import { AssignPage } from './assign/assign.page';
import { AssignOverviewPage } from './assign/overview/assign-overview.page';
import { AssignAPIPage } from './assign/api/assign-api.page';
// BADGES
import { BadgePage } from './badge/badge.page';
import { BadgeAPIPage } from './badge/api/badge-api.page';
import { BadgeOverviewPage } from './badge/overview/badge-overview.page';
// BREADCRUMB
import { BreadcrumbPage } from './breadcrumb/breadcrumb.page';
import { BreadcrumbOverviewPage } from './breadcrumb/overview/breadcrumb-overview.page';
import { BreadcrumbAPIPage } from './breadcrumb/api/breadcrumb-api.page';
// CARD
import { CardPage } from './card/card.page';
import { CardAPIPage } from './card/api/card-api.page';
import { CardOverviewPage } from './card/overview/card-overview.page';
// COLLAPSIBLE
import { CollapsiblePage } from './collapsible/collapsible.page';
import { CollapsibleOverviewPage } from './collapsible/overview/collapsible-overview.page';
import { CollapsibleAPIPage } from './collapsible/api/collapsible-api.page';
// DROPDOWN
import { DropdownPage } from './dropdown/dropdown.page';
import { DropdownAPIPage } from './dropdown/api/dropdown-api.page';
import { DropdownOverviewPage } from './dropdown/overview/dropdown-overview.page';
// FORM
import { FormPage } from './form/form.page';
import { FilterPage } from './filter/filter.page';
import { ItemPage } from './item/item.page';
import { ListPage } from './list/list.page';
import { LoaderPage } from './loader/loader.page';
import { ModalPage } from './modal/modal.page';
import { TablePage } from './table/table.page';

// FRAGMENT

// SERVICE

const PAGES = [
    ComponentsPage,
    ButtonPage,
    ButtonOverviewPage,
    ButtonAPIPage,
    AlertPage,
    AlertOverviewPage,
    AlertAPIPage,
    BadgePage,
    BadgeAPIPage,
    BadgeOverviewPage,
    FormPage,
    AssignPage,
    AssignOverviewPage,
    AssignAPIPage,
    BreadcrumbPage,
    BreadcrumbOverviewPage,
    BreadcrumbAPIPage,
    CardPage,
    CardAPIPage,
    CardOverviewPage,
    CollapsiblePage,
    CollapsibleOverviewPage,
    CollapsibleAPIPage,
    DropdownPage,
    DropdownAPIPage,
    DropdownOverviewPage,
    FilterPage,
    ItemPage,
    ListPage,
    LoaderPage,
    ModalPage,
    TablePage
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
