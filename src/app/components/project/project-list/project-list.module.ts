import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list.component';
import { ListItemModule } from './list-item/list-item.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProjectListComponent],
  imports: [CommonModule, ListItemModule, RouterModule],
  exports: [ProjectListComponent],
})
export class ProjectListModule {}
