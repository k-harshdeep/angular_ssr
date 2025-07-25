import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
// import { renderApplication } from '@angular/platform-server';
import { provideServerRendering } from '@angular/platform-server';
const bootstrap = () => bootstrapApplication(AppComponent, {...config, providers: [provideServerRendering()]});

export default bootstrap;
