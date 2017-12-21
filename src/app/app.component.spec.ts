import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AppComponent } from './app.component';
import { PlatformMock, StatusBarMock, SplashScreenMock } from '../../test/mocks-ionic';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
            ],
            imports: [
                IonicModule.forRoot(AppComponent),
            ],
            providers: [
                { provide: StatusBar, useClass: StatusBarMock },
                { provide: SplashScreen, useClass: SplashScreenMock },
                { provide: Platform, useClass: PlatformMock },
            ]
        })
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
        expect(component instanceof AppComponent).toBe(true);
    });

    it('should have three pages', () => {
        expect(component.pages.length).toBe(3);
    });
});
