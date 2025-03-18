import { NgModule } from '@angular/core';
import { FooterComponent } from './footer.component';
import { MaterialModule } from '../../../shared/modules/material/material.module';

@NgModule({
  declarations: [FooterComponent],
  imports: [MaterialModule],
  exports: [FooterComponent],
})
export class FooterModule {}
