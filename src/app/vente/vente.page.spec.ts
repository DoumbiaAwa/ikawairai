import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VentePage } from './vente.page';

describe('VentePage', () => {
  let component: VentePage;
  let fixture: ComponentFixture<VentePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
