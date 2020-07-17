import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment34Component } from './assignment34.component';

describe('Assignment34Component', () => {
  let component: Assignment34Component;
  let fixture: ComponentFixture<Assignment34Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assignment34Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignment34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
