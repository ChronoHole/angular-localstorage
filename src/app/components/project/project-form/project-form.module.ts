import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectFormComponent } from './project-form.component';
import { FormItemModule } from './form-item/form-item.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';

@NgModule({
  declarations: [ProjectFormComponent],
  imports: [CommonModule, FormItemModule, ButtonModule],
  exports: [ProjectFormComponent],
})
export class ProjectFormModule {}
