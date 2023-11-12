import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccueilClientPage } from './accueil-client.page';

describe('AccueilClientPage', () => {
  let component: AccueilClientPage;
  let fixture: ComponentFixture<AccueilClientPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AccueilClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
