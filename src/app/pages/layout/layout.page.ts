import { Component, OnInit } from '@angular/core';
import { SLIDE_Y_SIMPLE } from 'src/app/shared/animations/slide.animation';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
  animations: [SLIDE_Y_SIMPLE]
})
export class LayoutPage implements OnInit {
  public animate = 'ready';

  constructor() { }

  ngOnInit() { }
}
