import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectOnboardingComponent } from './project-onboarding.component';

describe('ProjectOnboardingComponent', () => {
  let component: ProjectOnboardingComponent;
  let fixture: ComponentFixture<ProjectOnboardingComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
