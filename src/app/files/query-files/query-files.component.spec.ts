import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryFilesComponent } from './query-files.component';

describe('QueryFilesComponent', () => {
  let component: QueryFilesComponent;
  let fixture: ComponentFixture<QueryFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryFilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
