import { Component, OnInit } from '@angular/core';
import { SLIDE_X_SIMPLE } from 'src/app/shared/animations/slide.animation';
import { FORM_SELECT, FORM_STATES, INPUT_CHECK_GROUP, INPUT_CHECK_INLINE, INPUT_RADIO_BLOCK, INPUT_RADIO_INLINE } from './form.const';

@Component({
    selector: 'app-form-page',
    templateUrl: './form.page.html',
    styleUrls: ['./form.page.scss'],
    animations: [SLIDE_X_SIMPLE]
})

export class FormPage implements OnInit {
    public animate = 'ready';
    public html = {
        sizes: FORM_STATES,
        select: FORM_SELECT,
        radio: {
            block: INPUT_RADIO_BLOCK,
            inline: INPUT_RADIO_INLINE
        },
        check: {
            block: INPUT_CHECK_GROUP,
            inline: INPUT_CHECK_INLINE
        }
    }

    constructor() { }

    ngOnInit() { }
}
