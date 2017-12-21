import { Component } from '@angular/core';
import { IonicPage, ToastController } from 'ionic-angular';
import * as fromMqtt from 'mqtt';

@IonicPage()
@Component({
  selector: 'page-mqtt',
  templateUrl: 'mqtt.page.html',
})
export class MqttPage {
  // TODO: different ports for different protocols...?
  port = '8080';
  url = `mqtt://test.mosquitto.org:${this.port}`;
  mqttClient: fromMqtt.MqttClient;
  topic = `toy-ionic:${(Math.random() * Math.pow(10, 8)) | 0}`;
  message: string = '';
  responses: {id: number, payload: string, timestamp: string}[] = [];
  subscribed = false;

  constructor(private toastCtrl: ToastController) { }

  ionViewWillEnter() {
    this.mqttClient = fromMqtt.connect(this.url);

    this.mqttClient
      .on('connect', () => {
        // connected
      })
      .on('reconnect', () => {
        // reconnected
      })
      .on('message', (topic: string, payload: Buffer, packet: fromMqtt.Packet) => {
        const now = new Date().toUTCString();
        this.responses.push({
          id: this.responses.length + 1,
          payload: payload.toString(),
          timestamp: now,
        });
      })
      .on('error', (error: Error) => {
        this.errorToast(`Error: ${error.message}`);
      })
      .on('offline', () => {
        // offline
      })
      .on('close', () => {
        // closed
      });
  }

  ionViewWillLeave() {
    this.onDisconnect();
  }

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

  subscribe() {
    this.mqttClient
      .subscribe(this.topic, (error: Error, granted: fromMqtt.ISubscriptionGrant[]) => {
        if (error) {
          this.errorToast(`Error: ${error.message}`);
        }

        this.subscribed = false;
        for (let grant of granted) {
          if (grant.topic === this.topic) {
            this.subscribed = true;
          }
        }
      });
  }

  unsubscribe() {
    this.mqttClient
      .unsubscribe(this.topic, (error: Error, packet: fromMqtt.Packet) => {
        if (error) {
          this.errorToast(`Error: ${error.message}`);
        } else {
          this.subscribed = false;
        }
      });
  }

  onConnect() {
    if (!this.mqttClient) {
      this.mqttClient = fromMqtt.connect(this.url);
    } else if (this.mqttClient.disconnected) {
      this.mqttClient.reconnect();
    }
  }

  onDisconnect() {
    if (this.mqttClient) {
      // Force the close of connection
      this.mqttClient
        .end(true, () => {
          this.responses = [];
        });
    }
  }

  responseId(index: number, item: {id: number, payload: string}) {
    return item.id;
  }

  onSubscribe() {
    this.subscribe();
  }

  onUnsubscribe() {
    this.unsubscribe();
  }

  onPublish() {
    if (this.mqttClient && this.message && this.topic) {
      this.mqttClient
        .publish(this.topic, this.message)
    }
  }
}
