import { TestBed, fakeAsync, tick, inject } from '@angular/core/testing';

import { ConfirmationModalService } from './confirmation-modal.service';
import { MatDialogModule, MatDialog } from '@angular/material';
import { Mock } from 'ts-mocks';
import { of } from 'rxjs';
import { Component } from '@angular/core';
import { ConfirmationModal } from './confirmation-model';

describe('ConfirmationModalService', () => {
  let matDialogMock: Mock<MatDialog>;

  const dialogRefSpyObj = jasmine.createSpyObj({ afterClosed: of(true), close: () => { }, open: of((x: Component, y: any) => { }) });

  beforeEach(() => {

    matDialogMock = new Mock<MatDialog>();
    matDialogMock.setup(x => x.open).is((x, y) => dialogRefSpyObj);

    TestBed.configureTestingModule({
      imports: [
        MatDialogModule
      ],
      providers: [
        {
          provide: MatDialog,
          useValue: matDialogMock.Object
        }
      ]
    });
  });

  it('should be created', () => {
    const service = TestBed.get(ConfirmationModalService);
    expect(service).toBeTruthy();
  });

  it('should open dialog', inject([ConfirmationModalService], service => {
    const options = new ConfirmationModal();
    const action = jasmine.createSpy('action');

    dialogRefSpyObj.afterClosed.and.returnValue(of(true));

    service.open(options, action);

    expect(action).toHaveBeenCalled();
  }));

});
