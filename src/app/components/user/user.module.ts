import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [UserComponent],
})
export class UserModule {}
