import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextControlWithIconComponent } from './text-control-with-icon.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TextControlWithIconComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TextControlWithIconComponent],
})
export class TextControlWithIconModule {}
