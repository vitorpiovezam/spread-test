import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PokedexViewDialogComponent } from './view-dialog.component';

describe('PokedexViewDialogComponent', () => {
    let component: PokedexViewDialogComponent;
    let fixture: ComponentFixture<PokedexViewDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PokedexViewDialogComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PokedexViewDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});