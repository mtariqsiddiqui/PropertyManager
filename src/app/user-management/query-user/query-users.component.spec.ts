import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryUsersComponent } from './query-users.component';

describe('QueryUserComponent', () => {
  let component: QueryUsersComponent;
  let fixture: ComponentFixture<QueryUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
