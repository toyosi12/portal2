import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfieComponent } from './my-profie.component';

describe('MyProfieComponent', () => {
  let component: MyProfieComponent;
  let fixture: ComponentFixture<MyProfieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
