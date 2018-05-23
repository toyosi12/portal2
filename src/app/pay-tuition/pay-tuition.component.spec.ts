import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayTuitionComponent } from './pay-tuition.component';

describe('PayTuitionComponent', () => {
  let component: PayTuitionComponent;
  let fixture: ComponentFixture<PayTuitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayTuitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayTuitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
