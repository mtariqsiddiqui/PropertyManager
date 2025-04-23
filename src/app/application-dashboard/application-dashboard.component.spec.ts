import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationDashboardComponent } from './application-dashboard.component';

describe('ApplicationDashboardComponent', () => {
  let component: ApplicationDashboardComponent;
  let fixture: ComponentFixture<ApplicationDashboardComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
