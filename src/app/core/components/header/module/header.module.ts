import { NgModule } from '@angular/core';
import { MaterialModule } from '../../../../shared/modules/material/material.module';
import { HeaderComponent } from '../layout/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [MaterialModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
