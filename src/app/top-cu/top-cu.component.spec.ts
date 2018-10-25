import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCUComponent } from './top-cu.component';

describe('TopCUComponent', () => {
  let component: TopCUComponent;
  let fixture: ComponentFixture<TopCUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopCUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
