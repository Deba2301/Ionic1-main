import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HomePage } from './home.page';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomePage);
    AppRoutingModule
    component = fixture.componentInstance;
    fixture.detectChanges();
    router= TestBed.get(Router);
  }));

  it('should go to pickup-calls on se all', () => {
    spyOn(router,'navigate');
    component.goToPickupCalls();
    expect(router.navigate).toHaveBeenCalledWith(['pickup-calls']);
    
  })
  
  it('should go to new pickup call on create pickup call', () => {
    spyOn(router,'navigate');
    component.newPickupCall();
    expect(router.navigate).toHaveBeenCalledWith(['pickup-call']);
    
  })
  
});
