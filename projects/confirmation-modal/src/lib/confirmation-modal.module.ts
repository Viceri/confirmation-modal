import { CommonModule } from '@angular/common';
import { ConfirmationModalComponent } from './confirmation-modal.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

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
