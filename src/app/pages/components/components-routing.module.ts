import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { ComponentsPage } from './components.page';
import { ButtonPage } from './button/button.page';
import { AlertPage } from './alert/alert.page';
import { BadgePage } from './badge/badge.page';
import { FormPage } from './form/form.page';

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
                path: 'badges',
                component: BadgePage,
            },
            {
                path: 'form',
                component: FormPage
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
