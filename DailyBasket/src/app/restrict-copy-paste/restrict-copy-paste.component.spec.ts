import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictCopyPasteComponent } from './restrict-copy-paste.component';

describe('RestrictCopyPasteComponent', () => {
  let component: RestrictCopyPasteComponent;
  let fixture: ComponentFixture<RestrictCopyPasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestrictCopyPasteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestrictCopyPasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
