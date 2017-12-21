import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { VibrationPage } from './vibration.page';
import { PlatformMock, StatusBarMock, SplashScreenMock } from '../../../../test/mocks-ionic';
import { Vibration } from '@ionic-native/vibration';

describe('VibrationPage', () => {
    let fixture: ComponentFixture<VibrationPage>;
    let component: VibrationPage;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                VibrationPage,
            ],
            imports: [
                IonicModule.forRoot(VibrationPage),
            ],
            providers: [
                Vibration,
                { provide: StatusBar, useClass: StatusBarMock },
                { provide: SplashScreen, useClass: SplashScreenMock },
                { provide: Platform, useClass: PlatformMock },
            ]
        })
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(VibrationPage);
        component = fixture.componentInstance;
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
        expect(component instanceof VibrationPage).toBe(true);
    });
});
