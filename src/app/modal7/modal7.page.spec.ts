import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal7Page } from './modal7.page';

describe('Modal7Page', () => {
  let component: Modal7Page;
  let fixture: ComponentFixture<Modal7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modal7Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modal7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
