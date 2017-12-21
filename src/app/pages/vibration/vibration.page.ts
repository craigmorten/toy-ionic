import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';

@IonicPage()
@Component({
  selector: 'page-vibration',
  templateUrl: 'vibration.page.html'
})
export class VibrationPage {
  constructor(private vibration: Vibration) {}

  vibrate() {
    this.vibration.vibrate(2000);
  }
}
