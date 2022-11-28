import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ProjectListModule } from './project-list/project-list.module';
import { ProjectFormModule } from './project-form/project-form.module';
import { ProjectService } from './project.service';

@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    ProjectListModule,
    ProjectFormModule,
    AppRoutingModule,
  ],
  exports: [ProjectComponent],
  providers: [ProjectService],
})
export class ProjectModule {}
