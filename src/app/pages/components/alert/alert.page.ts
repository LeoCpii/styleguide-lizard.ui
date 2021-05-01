import { Component, OnInit } from '@angular/core';
import { SLIDE_X_SIMPLE } from 'src/app/shared/animations/slide.animation';

@Component({
  selector: 'app-alert-page',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  animations: [SLIDE_X_SIMPLE]
})

export class AlertPage implements OnInit {
  public animate = 'ready';

  constructor() { }

  ngOnInit() { }
}
