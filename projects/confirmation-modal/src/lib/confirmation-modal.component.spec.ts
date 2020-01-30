import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { ConfirmationModalComponent } from './confirmation-modal.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDialog,
  MatDialogRef,
  MatIconModule,
  MAT_DIALOG_DATA,
  MatDialogModule
} from '@angular/material';
import { of } from 'rxjs';

describe('ConfirmationModalComponent', () => {
  let component: ConfirmationModalComponent;
  let fixture: ComponentFixture<ConfirmationModalComponent>;

  const dialogRefSpyObj = jasmine.createSpyObj({ afterClosed: of({}), close: () => { }, open: () => { } });
  let modalSpy: jasmine.Spy;

  dialogRefSpyObj.componentInstance = { body: '' };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmationModalComponent],
      imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
      ],
      providers: [
        MatDialog,
        { provide: MatDialogRef, useValue: dialogRefSpyObj },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    modalSpy = spyOn(TestBed.get(MatDialog), 'open').and.returnValue(dialogRefSpyObj);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close dialog confirmation modal', () => {
    component.close();

    expect(dialogRefSpyObj.close).toHaveBeenCalled();
  });

  it('should open dialog confirmation modal with confirmation true/false', () => {
    component.setConfirmationResponse(true);

    expect(dialogRefSpyObj.close).toHaveBeenCalledWith(true);
  });
});
