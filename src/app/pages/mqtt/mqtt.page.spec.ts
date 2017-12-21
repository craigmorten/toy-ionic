import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MqttPage } from './mqtt.page';
import { PlatformMock, StatusBarMock, SplashScreenMock } from '../../../../test/mocks-ionic';

describe('RootPage', () => {
    let fixture: ComponentFixture<MqttPage>;
    let component: MqttPage;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                MqttPage,
            ],
            imports: [
                IonicModule.forRoot(MqttPage),
            ],
            providers: [
                { provide: StatusBar, useClass: StatusBarMock },
                { provide: SplashScreen, useClass: SplashScreenMock },
                { provide: Platform, useClass: PlatformMock },
            ]
        })
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MqttPage);
        component = fixture.componentInstance;
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
        expect(component instanceof MqttPage).toBe(true);
    });
});
