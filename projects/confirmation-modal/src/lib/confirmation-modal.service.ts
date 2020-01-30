import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Observable } from 'rxjs';
import { ConfirmationModal } from './confirmation-model';
import { ConfirmationModalComponent } from './confirmation-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationModalService {

  constructor(private matDialog: MatDialog) { }

  open(options: ConfirmationModal): Observable<boolean> {

    const matDialogConfig = new MatDialogConfig<ConfirmationModal>();
    matDialogConfig.disableClose = true;
    matDialogConfig.data = options;

    const dialogRef = this.matDialog.open(ConfirmationModalComponent, matDialogConfig);

    return dialogRef.afterClosed();
  }

}
