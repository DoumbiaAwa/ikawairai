import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlimentPage } from './aliment.page';

describe('AlimentPage', () => {
  let component: AlimentPage;
  let fixture: ComponentFixture<AlimentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlimentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
