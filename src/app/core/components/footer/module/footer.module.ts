import { NgModule } from '@angular/core';
import { MaterialModule } from '@shared/modules/material/material.module';

import { FooterComponent } from '../layout/footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [MaterialModule],
  exports: [FooterComponent],
})
export class FooterModule {}
