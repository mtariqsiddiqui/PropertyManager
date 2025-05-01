import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryRefundComponent } from './query-refund.component';

describe('QueryRefundComponent', () => {
  let component: QueryRefundComponent;
  let fixture: ComponentFixture<QueryRefundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryRefundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
