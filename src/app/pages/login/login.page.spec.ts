import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginPage);
    AppRoutingModule
    ReactiveFormsModule
    component = fixture.componentInstance;
    fixture.detectChanges();
    router=TestBed.get(Router);
  }));
  it('should create  form on init',()=>{
    component.ngOnInit();
    expect(component.form).not.toBeUndefined();
  })

  it('should go to the home page on login', () => {
    spyOn(router,'navigate');
    component.login();
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  })
  it('should go to the register page on register', () => {
    spyOn(router,'navigate');
    component.register();
    expect(router.navigate).toHaveBeenCalledWith(['register']);

  })
});
