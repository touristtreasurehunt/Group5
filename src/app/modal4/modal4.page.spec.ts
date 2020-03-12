import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal4Page } from './modal4.page';

describe('Modal4Page', () => {
  let component: Modal4Page;
  let fixture: ComponentFixture<Modal4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modal4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modal4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
