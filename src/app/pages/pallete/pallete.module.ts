import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PalleteRoutingModule } from './pallete-routing.module';
import { MarkdownModule } from 'ngx-markdown'

// PAGE
import { PalletePage } from './pallete.page';

// FRAGMENT

// SERVICE

const PAGES = [
    PalletePage,
];

const FRAGMENTS = [];

const PROVIDERS = [];

@NgModule({
    imports: [
        MarkdownModule.forChild(),
        PalleteRoutingModule,
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
export class PalleteModule { }
