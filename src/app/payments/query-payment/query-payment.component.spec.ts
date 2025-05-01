import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryPaymentComponent } from './query-payment.component';

describe('QueryPaymentComponent', () => {
  let component: QueryPaymentComponent;
  let fixture: ComponentFixture<QueryPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryPaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
