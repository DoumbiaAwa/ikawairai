import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccueilAwaPage } from './accueil-awa.page';

describe('AccueilAwaPage', () => {
  let component: AccueilAwaPage;
  let fixture: ComponentFixture<AccueilAwaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AccueilAwaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
