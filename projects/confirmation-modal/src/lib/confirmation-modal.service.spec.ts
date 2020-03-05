import { TestBed } from '@angular/core/testing';

import { ConfirmationModalService } from './confirmation-modal.service';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { Mock } from 'ts-mocks';
import { of } from 'rxjs';
import { Component } from '@angular/core';
import { ConfirmationModal } from './confirmation-model';

describe('ConfirmationModalService', () => {
  let matDialogMock: Mock<MatDialog>;
  let service: ConfirmationModalService;

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
    service = TestBed.get(ConfirmationModalService);
    expect(service).toBeTruthy();
  });

  it('should open dialog', () => {
    const options = new ConfirmationModal();

    dialogRefSpyObj.afterClosed.and.returnValue(of(true));

    service.open(options).subscribe(res => expect(res).toEqual(true));
  });

});
