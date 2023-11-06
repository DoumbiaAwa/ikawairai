import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginEmployerPage } from './login-employer.page';

describe('LoginEmployerPage', () => {
  let component: LoginEmployerPage;
  let fixture: ComponentFixture<LoginEmployerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginEmployerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
