import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { PickupCallPage } from './pickup-call.page';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('PickupCallsPage', () => {
  let component: PickupCallPage;
  let fixture: ComponentFixture<PickupCallPage>;
  let router: Router;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PickupCallPage);
    AppRoutingModule
    component = fixture.componentInstance;
    fixture.detectChanges();
    router= TestBed.get(Router);
  }));

  it('should go to home on create new pickup call', () => {
    spyOn(router , 'navigate');
    component.newPickupCall();
    expect(router.navigate).toHaveBeenCalledWith(['home']);

    
  })
});
