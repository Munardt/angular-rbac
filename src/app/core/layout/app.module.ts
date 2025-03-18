import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { FooterModule } from '../components/footer/footer.module';
import { HeaderModule } from '../components/header/header.module';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutes, BrowserModule, HeaderModule, FooterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
