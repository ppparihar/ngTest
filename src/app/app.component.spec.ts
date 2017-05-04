import { AppComponent } from "./app.component";
import { TestBed, ComponentFixture, async } from "@angular/core/testing";
import { By } from "@angular/platform-browser"
import { DebugElement } from "@angular/core";

describe("AppComonent", () => {
    let comp: AppComponent;
    let de: DebugElement;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent]
        })
        .compileComponents();
    }));

    beforeEach((() => {
        fixture = TestBed.createComponent(AppComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h1'));
    }));

    it("should create component", () => {
        expect(comp).toBeDefined();
    });
    it("should have Angular text", () => {
        fixture.detectChanges();
        let h1 = de.nativeElement;
        expect(h1.innerText).toMatch(/Angular/, 'h1 should say something about "Angular"');
    })
})