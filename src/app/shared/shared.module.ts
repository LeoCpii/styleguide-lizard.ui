import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';

// Lib
import Lizard from 'lizard.ui';

// Service

// Guard

// Pipes

// directives

const SERVICES = [];

const LIBS = [Lizard];

const GUARDS = [];

const PIPES = [];

const DIRECTIVES = [];

@NgModule({
    imports: [ComponentsModule],
    exports: [ComponentsModule, ...PIPES, ...DIRECTIVES],
    declarations: [...PIPES, ...DIRECTIVES],
    providers: [
        ...SERVICES,
        ...GUARDS,
        ...LIBS
    ],
})
export class SharedModule { }
