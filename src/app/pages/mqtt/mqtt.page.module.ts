import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MqttPage } from './mqtt.page';

@NgModule({
  declarations: [
    MqttPage,
  ],
  imports: [
    IonicPageModule.forChild(MqttPage),
  ],
  entryComponents: [
    MqttPage,
  ],
})
export class MqttPageModule {}
