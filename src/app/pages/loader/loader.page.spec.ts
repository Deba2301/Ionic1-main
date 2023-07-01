import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { LoaderPage } from './loader.page';
import{ Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
  let router: Router;
  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoaderPage);
    AppRoutingModule
    component = fixture.componentInstance;
    fixture.detectChanges();
    router= TestBed.get(Router);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('shoul go to the login page after load',  fakeAsync(()=>{
    spyOn(router, 'navigate');
    component.ngOnInit();

    tick(1500);

    expect(router.navigate).toHaveBeenCalledWith(['login'])

  }))
});
