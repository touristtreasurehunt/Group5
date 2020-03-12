import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal5Page } from './modal5.page';

describe('Modal5Page', () => {
  let component: Modal5Page;
  let fixture: ComponentFixture<Modal5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modal5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modal5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
