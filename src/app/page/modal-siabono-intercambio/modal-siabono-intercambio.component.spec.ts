/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModalSiabonoIntercambioComponent } from './modal-siabono-intercambio.component';

describe('ModalSiabonoIntercambioComponent', () => {
  let component: ModalSiabonoIntercambioComponent;
  let fixture: ComponentFixture<ModalSiabonoIntercambioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSiabonoIntercambioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSiabonoIntercambioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
