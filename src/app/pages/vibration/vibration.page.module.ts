import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VibrationPage } from './vibration.page';
import { Vibration } from '@ionic-native/vibration';

@NgModule({
  declarations: [
    VibrationPage,
  ],
  providers: [
    Vibration,
  ],
  imports: [
    IonicPageModule.forChild(VibrationPage),
  ],
  entryComponents: [
    VibrationPage,
  ]
})
export class VibrationPageModule {}
