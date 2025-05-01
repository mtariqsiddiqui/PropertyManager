import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryBillComponent } from './query-bill.component';

describe('QueryBillComponent', () => {
  let component: QueryBillComponent;
  let fixture: ComponentFixture<QueryBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryBillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
