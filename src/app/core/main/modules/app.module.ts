import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterModule } from 'app/core/components/footer/module/footer.module';
import { HeaderModule } from 'app/core/components/header/module/header.module';

import { AppComponent } from '../layout/app.component';
import { AppRoutes } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutes, BrowserModule, HeaderModule, FooterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
