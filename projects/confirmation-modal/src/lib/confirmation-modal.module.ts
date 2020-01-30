import { CommonModule } from '@angular/common';
import { ConfirmationModalComponent } from './confirmation-modal.component';
import { MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [
    ConfirmationModalComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
  ],
  exports: [
    ConfirmationModalComponent
  ],
  entryComponents: [
    ConfirmationModalComponent
  ]
})
export class ConfirmationModalModule { }
