import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccueilEmployerPage } from './accueil-employer.page';

describe('AccueilEmployerPage', () => {
  let component: AccueilEmployerPage;
  let fixture: ComponentFixture<AccueilEmployerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AccueilEmployerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
