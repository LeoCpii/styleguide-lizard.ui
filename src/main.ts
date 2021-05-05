import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { version } from './../package.json';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

function setVersion() {
  var meta = document.createElement('meta');
  meta.name = 'version';
  meta.content = version;
  document.getElementsByTagName('head')[0].appendChild(meta);
}

setVersion();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
