import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DefauldCategoriePage } from './defauld-categorie.page';

describe('DefauldCategoriePage', () => {
  let component: DefauldCategoriePage;
  let fixture: ComponentFixture<DefauldCategoriePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DefauldCategoriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
