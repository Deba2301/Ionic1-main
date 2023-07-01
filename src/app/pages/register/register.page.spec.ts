import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RegisterPage } from './register.page';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;
  let router : Router;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegisterPage);
    AppRoutingModule
    component = fixture.componentInstance;
    fixture.detectChanges();
    router= TestBed.get(Router);
  }));

  it('should go on home page on register', () => {
      spyOn(router, 'navigate');
      component.register();
      expect(router.navigate).toHaveBeenCalledWith(['home']);
  });
});
