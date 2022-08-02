import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PokedexViewComponent } from './view.component';

describe('PokedexViewComponent', () => {
    let component: PokedexViewComponent;
    let fixture: ComponentFixture<PokedexViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PokedexViewComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PokedexViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});