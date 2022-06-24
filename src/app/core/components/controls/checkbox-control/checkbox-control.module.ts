import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxControlComponent } from './checkbox-control.component';

@NgModule({
  declarations: [CheckboxControlComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CheckboxControlComponent],
})
export class CheckboxControlModule {}
