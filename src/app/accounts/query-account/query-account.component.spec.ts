import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryAccountComponent } from './query-account.component';

describe('QueryAccountComponent', () => {
  let component: QueryAccountComponent;
  let fixture: ComponentFixture<QueryAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
