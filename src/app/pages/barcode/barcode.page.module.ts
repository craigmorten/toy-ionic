import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarcodePage } from './barcode.page';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    BarcodePage,
  ],
  providers: [
    BarcodeScanner,
    AndroidPermissions,
  ],
  imports: [
    IonicPageModule.forChild(BarcodePage),
  ],
  entryComponents: [
    BarcodePage,
  ]
})
export class BarcodePageModule { }
