import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal10Page } from './modal10.page';

describe('Modal10Page', () => {
  let component: Modal10Page;
  let fixture: ComponentFixture<Modal10Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modal10Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modal10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
