import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OfertaCabaniaPage } from './oferta-cabania.page';

describe('OfertaCabaniaPage', () => {
  let component: OfertaCabaniaPage;
  let fixture: ComponentFixture<OfertaCabaniaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OfertaCabaniaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
