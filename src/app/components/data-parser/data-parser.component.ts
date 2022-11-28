import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/components/project/project.model';
import { ProjectService } from 'src/app/components/project/project.service';
import { DataParserService } from './data-parser.service';

@Component({
  selector: 'app-data-parser',
  templateUrl: './data-parser.component.html',
  styleUrls: ['./data-parser.component.scss'],
})
export class DataParserComponent implements OnInit, OnDestroy {
  constructor(private _dataParserService: DataParserService) {}

  private _projects: Project[] = [];

  projects$: Observable<Project[]>;
  label = 'Сохранить';
  data = '';

  ngOnInit() {}

  ngOnDestroy() {}

  onSave() {
    this._dataParserService.parseData(this.data);
  }
}
