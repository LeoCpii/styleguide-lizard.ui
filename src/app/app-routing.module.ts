import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'components', pathMatch: 'full' },
    { path: 'components', loadChildren: () => import('./pages/components/components.module').then(m => m.ComponentsModule) },
    { path: 'layout', loadChildren: () => import('./pages/layout/layout.module').then(m => m.LayoutModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
