import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RootPage } from './root.page';
import { PlatformMock, StatusBarMock, SplashScreenMock } from '../../../../test/mocks-ionic';

describe('RootPage', () => {
    let fixture: ComponentFixture<RootPage>;
    let component: RootPage;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                RootPage,
            ],
            imports: [
                IonicModule.forRoot(RootPage),
            ],
            providers: [
                { provide: StatusBar, useClass: StatusBarMock },
                { provide: SplashScreen, useClass: SplashScreenMock },
                { provide: Platform, useClass: PlatformMock },
            ]
        })
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RootPage);
        component = fixture.componentInstance;
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
        expect(component instanceof RootPage).toBe(true);
    });
});
