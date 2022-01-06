import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Components
import { SideNavComponent } from './side-nav/side-nav.component';
import { NavComponent } from './nav/nav.component';
import { MarkupComponent } from './markup/markup.component';
import { TabsComponent } from './tabs/tabs.component';
import { CollapsibleComponent } from './collapsible/collapsible.component';

// Modules
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

// Services
import { CollapsibleService } from './collapsible/collapsible.service';

const COMPONENTS = [
    SideNavComponent,
    NavComponent,
    MarkupComponent,
    CollapsibleComponent,
    TabsComponent
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
