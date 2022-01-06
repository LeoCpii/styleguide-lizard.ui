import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { ComponentsPage } from './components.page';
import { ButtonPage } from './button/button.page';
import { ButtonOverviewPage } from './button/overview/button-overview.page';
import { ButtonAPIPage } from './button/api/button-api.page';

import { AlertPage } from './alert/alert.page';
import { AlertOverviewPage } from './alert/overview/alert-overview.page';
import { AlertAPIPage } from './alert/api/alert-api.page';

import { AssignPage } from './assign/assign.page';
import { AssignOverviewPage } from './assign/overview/assign-overview.page';
import { AssignAPIPage } from './assign/api/assign-api.page';

import { BadgePage } from './badge/badge.page';
import { BadgeOverviewPage } from './badge/overview/badge-overview.page';
import { BadgeAPIPage } from './badge/api/badge-api.page';

import { BreadcrumbPage } from './breadcrumb/breadcrumb.page';
import { BreadcrumbAPIPage } from './breadcrumb/api/breadcrumb-api.page';
import { BreadcrumbOverviewPage } from './breadcrumb/overview/breadcrumb-overview.page';

import { FormPage } from './form/form.page';

import { CardPage } from './card/card.page';
import { CardOverviewPage } from './card/overview/card-overview.page';
import { CardAPIPage } from './card/api/card-api.page';

import { CollapsiblePage } from './collapsible/collapsible.page';
import { CollapsibleOverviewPage } from './collapsible/overview/collapsible-overview.page';
import { CollapsibleAPIPage } from './collapsible/api/collapsible-api.page';

import { DropdownPage } from './dropdown/dropdown.page';
import { DropdownOverviewPage } from './dropdown/overview/dropdown-overview.page';
import { DropdownAPIPage } from './dropdown/api/dropdown-api.page';

import { FilterPage } from './filter/filter.page';
import { ItemPage } from './item/item.page';
import { ListPage } from './list/list.page';
import { LoaderPage } from './loader/loader.page';
import { ModalPage } from './modal/modal.page';
import { TablePage } from './table/table.page';
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
                children: [
                    {
                        path: '',
                        redirectTo: 'overview',
                        pathMatch: 'full'
                    },
                    {
                        path: 'overview',
                        component: ButtonOverviewPage
                    },
                    {
                        path: 'api',
                        component: ButtonAPIPage
                    }
                ]
            },
            {
                path: 'alerts',
                component: AlertPage,
                children: [
                    {
                        path: '',
                        redirectTo: 'overview',
                        pathMatch: 'full'
                    },
                    {
                        path: 'overview',
                        component: AlertOverviewPage
                    },
                    {
                        path: 'api',
                        component: AlertAPIPage
                    }
                ]
            },
            {
                path: 'assign',
                component: AssignPage,
                children: [
                    {
                        path: '',
                        redirectTo: 'overview',
                        pathMatch: 'full'
                    },
                    {
                        path: 'overview',
                        component: AssignOverviewPage
                    },
                    {
                        path: 'api',
                        component: AssignAPIPage
                    }
                ]
            },
            {
                path: 'badges',
                component: BadgePage,
                children: [
                    {
                        path: '',
                        redirectTo: 'overview',
                        pathMatch: 'full'
                    },
                    {
                        path: 'overview',
                        component: BadgeOverviewPage
                    },
                    {
                        path: 'api',
                        component: BadgeAPIPage
                    }
                ]
            },
            {
                path: 'form',
                component: FormPage
            },
            {
                path: 'breadcrumb',
                component: BreadcrumbPage,
                children: [
                    {
                        path: '',
                        redirectTo: 'overview',
                        pathMatch: 'full'
                    },
                    {
                        path: 'overview',
                        component: BreadcrumbOverviewPage
                    },
                    {
                        path: 'api',
                        component: BreadcrumbAPIPage
                    }
                ]
            },
            {
                path: 'card',
                component: CardPage,
                children: [
                    {
                        path: '',
                        redirectTo: 'overview',
                        pathMatch: 'full'
                    },
                    {
                        path: 'overview',
                        component: CardOverviewPage
                    },
                    {
                        path: 'api',
                        component: CardAPIPage
                    }
                ]
            },
            {
                path: 'collapsible',
                component: CollapsiblePage,
                children: [
                    {
                        path: '',
                        redirectTo: 'overview',
                        pathMatch: 'full'
                    },
                    {
                        path: 'overview',
                        component: CollapsibleOverviewPage
                    },
                    {
                        path: 'api',
                        component: CollapsibleAPIPage
                    }
                ]
            },
            {
                path: 'dropdown',
                component: DropdownPage,
                children: [
                    {
                        path: '',
                        redirectTo: 'overview',
                        pathMatch: 'full'
                    },
                    {
                        path: 'overview',
                        component: DropdownOverviewPage
                    },
                    {
                        path: 'api',
                        component: DropdownAPIPage
                    }
                ]
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
            {
                path: 'table',
                component: TablePage
            }
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
