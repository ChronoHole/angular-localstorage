import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormItemComponent } from './form-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormItemComponent],
  imports: [CommonModule, FormsModule],
  exports: [FormItemComponent],
})
export class FormItemModule {}
