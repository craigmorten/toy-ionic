import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BarcodePage } from './barcode.page';
import { PlatformMock, StatusBarMock, SplashScreenMock } from '../../../../test/mocks-ionic';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

describe('VibrationPage', () => {
    let fixture: ComponentFixture<BarcodePage>;
    let component: BarcodePage;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                BarcodePage,
            ],
            imports: [
                IonicModule.forRoot(BarcodePage),
            ],
            providers: [
                AndroidPermissions,
                BarcodeScanner,
                { provide: StatusBar, useClass: StatusBarMock },
                { provide: SplashScreen, useClass: SplashScreenMock },
                { provide: Platform, useClass: PlatformMock },
            ]
        })
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BarcodePage);
        component = fixture.componentInstance;
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
        expect(component instanceof BarcodePage).toBe(true);
    });
});
