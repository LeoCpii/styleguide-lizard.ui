import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { LayoutPage } from './layout.page';
import { GridPage } from './grid/grid.page';

const PROVIDERS = [];

const routes: Routes = [
    {
        path: '',
        component: LayoutPage,
        children: [
            {
                path: '',
                redirectTo: 'grid',
                pathMatch: 'full'
            },
            {
                path: 'grid',
                component: GridPage,
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
export class LayoutRoutingModule { }
