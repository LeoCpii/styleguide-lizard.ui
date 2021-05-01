import { Component, OnInit } from '@angular/core';
import { SLIDE_X_SIMPLE } from 'src/app/shared/animations/slide.animation';

@Component({
  selector: 'app-grid-page',
  templateUrl: './grid.page.html',
  styleUrls: ['./grid.page.scss'],
  animations: [SLIDE_X_SIMPLE]
})

export class GridPage implements OnInit {
  public animate = 'ready';
  public html = '<button class="lz-btn lz-btn--solid">Teste</button>';

  constructor() { }

  ngOnInit() { }
}
