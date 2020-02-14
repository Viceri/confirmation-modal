import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Observable } from 'rxjs';
import { ConfirmationModal } from './confirmation-model';
import { ConfirmationModalComponent } from './confirmation-modal.component';

type Action = () => void;

@Injectable({
  providedIn: 'root'
})
export class ConfirmationModalService {

  constructor(private matDialog: MatDialog) { }

  open(options: ConfirmationModal, action: Action) {

    const matDialogConfig = new MatDialogConfig<ConfirmationModal>();
    matDialogConfig.disableClose = true;
    matDialogConfig.data = options;

    this.matDialog.open(ConfirmationModalComponent, matDialogConfig)
      .afterClosed()
      .subscribe
      (
        res => {
          if (res) {
            action();
          }
        }
      );
  }

}
