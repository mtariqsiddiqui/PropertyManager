import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsViewComponent } from './details-view.component';

describe('DetailsViewComponent', () => {
  let component: DetailsViewComponent;
  let fixture: ComponentFixture<DetailsViewComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
