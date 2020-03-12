import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal8Page } from './modal8.page';

describe('Modal8Page', () => {
  let component: Modal8Page;
  let fixture: ComponentFixture<Modal8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modal8Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modal8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
