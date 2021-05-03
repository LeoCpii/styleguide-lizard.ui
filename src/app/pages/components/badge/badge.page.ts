import { Component, OnInit } from '@angular/core';
import { SLIDE_X_SIMPLE } from 'src/app/shared/animations/slide.animation';
import { BADGE_BUTTON, BADGE_COLORS, BADGE_SIZES } from './badge.const';

@Component({
  selector: 'app-badge-page',
  templateUrl: './badge.page.html',
  styleUrls: ['./badge.page.scss'],
  animations: [SLIDE_X_SIMPLE]
})

export class BadgePage implements OnInit {
  public animate = 'ready';
  public html = {
    sizes: BADGE_SIZES,
    button: BADGE_BUTTON,
    colors: BADGE_COLORS
  }

  constructor() { }

  ngOnInit() { }
}
