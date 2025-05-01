import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedAccountComponent } from './rejected-account.component';

describe('RejectedAccountComponent', () => {
  let component: RejectedAccountComponent;
  let fixture: ComponentFixture<RejectedAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RejectedAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectedAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
