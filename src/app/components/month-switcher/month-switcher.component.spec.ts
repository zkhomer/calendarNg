import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthSwitcherComponent } from './month-switcher.component';

describe('MonthSwitcherComponent', () => {
  let component: MonthSwitcherComponent;
  let fixture: ComponentFixture<MonthSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthSwitcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
