import { Component, OnInit } from '@angular/core';
import { SLIDE_X_SIMPLE } from 'src/app/shared/animations/slide.animation';
import { BUTTON_NO_STROKE, BUTTON_OUTLINE, BUTTON_SOLID, BUTTON_SIZE, BUTTON_STATE } from './button.const';

interface IIndex {
  el: string;
  name: string;
}

@Component({
  selector: 'app-button-page',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
  animations: [SLIDE_X_SIMPLE]
})

export class ButtonPage implements OnInit {
  public animate = 'ready';
  public indexes: IIndex[] = [];
  public html = {
    solid: BUTTON_SOLID,
    outline: BUTTON_OUTLINE,
    noStroke: BUTTON_NO_STROKE,
    size: BUTTON_SIZE,
    state: BUTTON_STATE
  };

  constructor() { }

  public scroll(el: string) {
   const dom = document.getElementById('root');
   dom.getAttribute('[data-section]');
  }
  ngOnInit() {
    const section = document.getElementsByTagName('SECTION');
    for (var i = 0; i < section.length; i++) {
      this.indexes.push({
        el: section[i]['dataset'].section,
        name: section[i]['dataset'].name
      })
    }
  }
}
