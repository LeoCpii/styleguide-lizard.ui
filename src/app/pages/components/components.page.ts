import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SLIDE_Y_SIMPLE } from 'src/app/shared/animations/slide.animation';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-components-page',
  templateUrl: './components.page.html',
  styleUrls: ['./components.page.scss'],
  animations: [SLIDE_Y_SIMPLE]
})
export class ComponentsPage implements OnInit {
  public animate = 'ready';
  public indexes = [];

  constructor(private router: Router) { }

  private buildIndexes() {
    console.log(document.getElementById('root'));
    this.indexes = [];
    console.log(this.indexes);
    const section = document.getElementsByTagName('SECTION');
    for (var i = 0; i < section.length; i++) {
      this.indexes.push({
        el: section[i]['dataset'].section,
        name: section[i]['dataset'].name
      })
    }
    console.log(this.indexes);

    return this.indexes;
  }

  ngOnInit() {
    // this.router.events
    //   .pipe(filter(event => event instanceof NavigationEnd))
    //   .subscribe(() => this.buildIndexes());
  }
}
