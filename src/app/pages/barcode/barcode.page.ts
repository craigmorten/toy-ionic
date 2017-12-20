import { Component } from '@angular/core';

import { IonicPage } from 'ionic-angular';

import { BarcodeScanner, BarcodeScanResult } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-barcode',
  templateUrl: 'barcode.page.html'
})
export class BarcodePage {
  constructor(private barcodeScanner: BarcodeScanner) {}

  cancelled: boolean;
  text: string;
  format: string;
  placeholder = 'Waiting for scan...';

  scan() {
    this.barcodeScanner.scan().then((barcodeData: BarcodeScanResult) => {
      this.cancelled = barcodeData.cancelled;
      this.text = barcodeData.text;
      this.format = barcodeData.format;
     }, (err: Error) => {
         console.log(err.message);
     });
  }
}
