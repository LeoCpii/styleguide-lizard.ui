import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
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
import { ModalPage } from './modal/modal.page';

const PROVIDERS = [];

const routes: Routes = [
    {
        path: '',
        component: ComponentsPage,
        children: [
            {
                path: '',
                redirectTo: 'alerts',
                pathMatch: 'full'
            },
            {
                path: 'button',
                component: ButtonPage,
            },
            {
                path: 'alerts',
                component: AlertPage,
            },
            {
                path: 'assign',
                component: AssignPage,
            },
            {
                path: 'badges',
                component: BadgePage,
            },
            {
                path: 'form',
                component: FormPage
            },
            {
                path: 'breadcrumb',
                component: BreadcrumbPage
            },
            {
                path: 'card',
                component: CardPage
            },
            {
                path: 'collapsible',
                component: CollapsiblePage
            },
            {
                path: 'dropdown',
                component: DropdownPage
            },
            {
                path: 'filter',
                component: FilterPage
            },
            {
                path: 'item',
                component: ItemPage
            },
            {
                path: 'list',
                component: ListPage
            },
            {
                path: 'loader',
                component: LoaderPage
            },
            {
                path: 'modal',
                component: ModalPage
            },
            // {
            //     path: 'modal',
            //     component: ModalPage
            // }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
    providers: PROVIDERS
})
export class ComponentsRoutingModule { }
