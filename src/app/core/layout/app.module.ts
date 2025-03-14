import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutes, BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
