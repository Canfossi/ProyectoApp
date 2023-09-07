import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CabaniaPage } from './cabania.page';

describe('CabaniaPage', () => {
  let component: CabaniaPage;
  let fixture: ComponentFixture<CabaniaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CabaniaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
