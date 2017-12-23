import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardUserComponent } from './admin-dashboard-user.component';

describe('AdminDashboardUserComponent', () => {
  let component: AdminDashboardUserComponent;
  let fixture: ComponentFixture<AdminDashboardUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashboardUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
