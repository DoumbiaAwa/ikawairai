import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PertePage } from './perte.page';

describe('PertePage', () => {
  let component: PertePage;
  let fixture: ComponentFixture<PertePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PertePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
