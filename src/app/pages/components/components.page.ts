import { Component, OnInit } from '@angular/core';
import { SLIDE_Y_SIMPLE } from 'src/app/shared/animations/slide.animation';

@Component({
  selector: 'app-components-page',
  templateUrl: './components.page.html',
  styleUrls: ['./components.page.scss'],
  animations: [SLIDE_Y_SIMPLE]
})
export class ComponentsPage implements OnInit {
  public animate = 'ready';

  constructor() { }

  ngOnInit() { }
}
