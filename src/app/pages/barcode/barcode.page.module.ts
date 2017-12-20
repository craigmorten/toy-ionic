import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarcodePage } from './barcode.page';

@NgModule({
  declarations: [
    BarcodePage,
  ],
  imports: [
    IonicPageModule.forChild(BarcodePage),
  ],
})
export class BarcodePageModule {}
