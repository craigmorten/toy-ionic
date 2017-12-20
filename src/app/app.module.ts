import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { RootPage } from './pages/root/root.page';
import { VibrationPage } from './pages/vibration/vibration.page';
import { BarcodePage } from './pages/barcode/barcode.page';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Vibration } from '@ionic-native/vibration';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    MyApp,
    RootPage,
    VibrationPage,
    BarcodePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [
    IonicApp
  ],
  entryComponents: [
    // Every component that is used dynamically, not declaritively
    MyApp,
    RootPage,
    VibrationPage,
    BarcodePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Vibration,
    BarcodeScanner,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule {}
