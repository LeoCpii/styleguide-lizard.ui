import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Components
import { SideNavComponent } from './side-nav/side-nav.component';
import { NavComponent } from './nav/nav.component';
import { MarkupComponent } from './markup/markup.component';

// Modules
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { CollapsibleComponent } from './collapsible/collapsible.component';

// Services
import { CollapsibleService } from './collapsible/collapsible.service';

const COMPONENTS = [
    SideNavComponent,
    NavComponent,
    MarkupComponent,
    CollapsibleComponent
];

const PROVIDERS = [CollapsibleService];

@NgModule({
    imports: [
        MarkdownModule.forChild(),
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule
    ],
    exports: [
        ...COMPONENTS
    ],
    declarations: [...COMPONENTS],
    providers: [
        ...PROVIDERS,
    ]
})

export class ComponentsModule { }
