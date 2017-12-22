import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RootPage } from './pages/root/root.page';
import { VibrationPage } from './pages/vibration/vibration.page';
import { BarcodePage } from './pages/barcode/barcode.page';
import { MqttPage } from './pages/mqtt/mqtt.page';

import { Page } from './models/page/page'

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  @ViewChild(Nav) nav: Nav;
  
  pages: Page[];
  rootPage: any = RootPage;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: RootPage },
      { title: 'Vibration', component: VibrationPage },
      { title: 'Barcode', component: BarcodePage },
      { title: 'MQTT', component: MqttPage },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page: Page) {
    this.menu.close();
    this.nav.setRoot(page.component);
  }
}
