import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryCustomerComponent } from './query-customer.component';

describe('QueryCustomerComponent', () => {
  let component: QueryCustomerComponent;
  let fixture: ComponentFixture<QueryCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryCustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
