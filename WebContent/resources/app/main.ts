import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.modules';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
