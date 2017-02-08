/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AmandaComponent } from './amanda.component';

describe('AmandaComponent', () => {
  let component: AmandaComponent;
  let fixture: ComponentFixture<AmandaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmandaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
