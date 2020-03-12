import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal11Page } from './modal11.page';

describe('Modal11Page', () => {
  let component: Modal11Page;
  let fixture: ComponentFixture<Modal11Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modal11Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modal11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
