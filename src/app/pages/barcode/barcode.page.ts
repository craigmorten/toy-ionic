import { Component } from '@angular/core';
import { IonicPage, ToastController, Platform } from 'ionic-angular';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { BarcodeScanner, BarcodeScanResult } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-barcode',
  templateUrl: 'barcode.page.html'
})
export class BarcodePage {
  constructor(
    private platform: Platform,
    private toastCtrl: ToastController,
    private androidPermissions: AndroidPermissions,
    private barcodeScanner: BarcodeScanner
  ) { }

  cancelled: boolean;
  text: string;
  format: string;
  placeholder = 'Waiting for scan...';

  errorToast(message: string = 'An unexpected error occurred.') {
    this.toastCtrl
      .create({
        message: message,
        duration: 2000,
        position: 'top',
        cssClass: 'error-toast',
      })
      .present();
  }

  requestPermissionAndScan() {
    this.androidPermissions
      .requestPermission(this.androidPermissions.PERMISSION.CAMERA)
      .then(() => {
        this.executeScan();
      })
      .catch((err) => {
        this.errorToast(`Error: ${err}`);
      });
  }

  scan() {
    if (this.platform.is('android')) {
      this.androidPermissions
        .checkPermission(this.androidPermissions.PERMISSION.CAMERA)
        .then((result: any) => {
          if (!result.hasPermission) {
            this.requestPermissionAndScan();
          } else {
            this.executeScan();
          }
        }, (err) => {
          this.requestPermissionAndScan();
        });
    } else {
      this.executeScan();
    }
  }

  executeScan() {
    this.barcodeScanner
      .scan()
      .then((barcodeData: BarcodeScanResult) => {
        this.cancelled = barcodeData.cancelled;
        this.text = barcodeData.text;
        this.format = barcodeData.format;
        return true;
      }, (err) => {
        this.errorToast(`Error: ${err}`);
        return false;
      });
  }
}
