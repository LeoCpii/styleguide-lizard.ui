import { Component, OnInit } from '@angular/core';
import { SLIDE_X_SIMPLE } from 'src/app/shared/animations/slide.animation';
import { FORM_SELECT, FORM_STATES, INPUT_RADIO_GROUP, INPUT_RADIO_INLINE } from './form.const';

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
      group: INPUT_RADIO_GROUP,
      inline: INPUT_RADIO_INLINE
    }
  }

  constructor() { }

  ngOnInit() { }
}
