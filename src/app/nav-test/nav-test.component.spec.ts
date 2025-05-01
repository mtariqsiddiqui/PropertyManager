import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTestComponent } from './nav-test.component';

describe('NavTestComponent', () => {
  let component: NavTestComponent;
  let fixture: ComponentFixture<NavTestComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NavTestComponent],
      imports: [
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
