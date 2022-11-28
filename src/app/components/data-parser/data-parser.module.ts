import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataParserComponent } from './data-parser.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '../../shared/components/button/button.module';
import { DataParserService } from './data-parser.service';

@NgModule({
  declarations: [DataParserComponent],
  imports: [CommonModule, FormsModule, ButtonModule],
  exports: [DataParserComponent],
  providers: [DataParserService],
})
export class DataLoaderModule {}
