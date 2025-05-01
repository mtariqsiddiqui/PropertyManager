import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedPaymentComponent } from './rejected-payment.component';

describe('RejectedPaymentComponent', () => {
  let component: RejectedPaymentComponent;
  let fixture: ComponentFixture<RejectedPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RejectedPaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectedPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
