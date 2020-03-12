import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal9Page } from './modal9.page';

describe('Modal9Page', () => {
  let component: Modal9Page;
  let fixture: ComponentFixture<Modal9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modal9Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modal9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
