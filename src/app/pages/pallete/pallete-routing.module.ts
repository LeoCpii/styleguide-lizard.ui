import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { PalletePage } from './pallete.page';

const PROVIDERS = [];

const routes: Routes = [
    {
        path: '',
        component: PalletePage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
    providers: PROVIDERS
})
export class PalleteRoutingModule { }
