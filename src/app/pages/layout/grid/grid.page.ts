import { Component, OnInit } from '@angular/core';
import { SLIDE_Y_SIMPLE } from 'src/app/shared/animations/slide.animation';

@Component({
  selector: 'app-grid-page',
  templateUrl: './grid.page.html',
  styleUrls: ['./grid.page.scss'],
  animations: [SLIDE_Y_SIMPLE]
})

export class GridPage implements OnInit {
  public animate = 'ready';
  public html = '<button class="lz-btn lz-btn--solid">Teste</button>';
  public markdown = `\`\`\`typescript
  const language = 'typescript';
  \`\`\`
  
  \`\`\`css
 .teste {
      color: #fff
  }
  \`\`\`

  \`\`\`html
  <button class="lz-btn lz-btn--solid">Teste</button>
   \`\`\`
  `;
  constructor() { }

  ngOnInit() { }
}
