import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSuperMarketComponent } from './admin-super-market.component';

describe('AdminSuperMarketComponent', () => {
  let component: AdminSuperMarketComponent;
  let fixture: ComponentFixture<AdminSuperMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSuperMarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSuperMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
