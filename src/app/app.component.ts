import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RootPage } from './pages/root/root.page';
import { VibrationPage } from './pages/vibration/vibration.page';
import { BarcodePage } from './pages/barcode/barcode.page';

import { Page } from './models/page/page'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = RootPage;
  pages: Page[];

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
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('ready!');
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page: Page) {
    console.log(`opening page ${page.title}`);
    this.menu.close();
    this.nav.setRoot(page.component);
  }
}
