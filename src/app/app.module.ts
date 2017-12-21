import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AppComponent } from './app.component';

import { RootPageModule } from './pages/root/root.page.module';
import { VibrationPageModule } from './pages/vibration/vibration.page.module';
import { BarcodePageModule } from './pages/barcode/barcode.page.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RootPageModule,
    VibrationPageModule,
    BarcodePageModule,
    IonicModule.forRoot(AppComponent),
  ],
  bootstrap: [
    IonicApp
  ],
  entryComponents: [
    AppComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule {}
