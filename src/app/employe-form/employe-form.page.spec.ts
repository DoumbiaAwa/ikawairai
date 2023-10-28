import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeFormPage } from './employe-form.page';

describe('EmployeFormPage', () => {
  let component: EmployeFormPage;
  let fixture: ComponentFixture<EmployeFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EmployeFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
