import { TestBed, ComponentFixture, async } from '@angular/core/testing'
import { DebugElement } from '@angular/core';

import { WelcomeComponent } from './Welcome.component';
import { UserService } from './user.service'

describe("WelcomeComponent", () => {
  //  let UserService: UserService;
    let comp: WelcomeComponent;
    let fixture: ComponentFixture<WelcomeComponent>;

    beforeEach(async(() => {

        let userServiceStub = {
            IsLogedIn: true,
            UserName: 'TestUser'
        };
        TestBed.configureTestingModule({
            declarations: [WelcomeComponent],
            providers: [{ provide: UserService, useValue: userServiceStub }]
        }).compileComponents();
      
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(WelcomeComponent);
        comp = fixture.componentInstance;
    })

    it("should create welcomeComponent", () => {
      //  fixture.detectChanges();
        expect(comp).toBeDefined();
    });

    it("should have LoggedIn value true", () => {
       // fixture.detectChanges();
        expect(comp.IsLogedIn).toBe(true);
    })
})