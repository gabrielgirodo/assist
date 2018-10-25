import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionAreaKDComponent } from './function-area-kd.component';

describe('FunctionAreaKDComponent', () => {
  let component: FunctionAreaKDComponent;
  let fixture: ComponentFixture<FunctionAreaKDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionAreaKDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionAreaKDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
