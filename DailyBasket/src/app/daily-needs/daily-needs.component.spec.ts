import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyNeedsComponent } from './daily-needs.component';

describe('DailyNeedsComponent', () => {
  let component: DailyNeedsComponent;
  let fixture: ComponentFixture<DailyNeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyNeedsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyNeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
