import { Component, OnInit } from '@angular/core';
import { SLIDE_X_SIMPLE } from 'src/app/shared/animations/slide.animation';
import { ALERT_ACTION, ALERT_COLORS } from './alert.const';

@Component({
  selector: 'app-alert-page',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  animations: [SLIDE_X_SIMPLE]
})

export class AlertPage implements OnInit {
  public animate = 'ready';
  public html = {
    colors: ALERT_COLORS,
    action: ALERT_ACTION
  }

  constructor() { }

  ngOnInit() { }
}
