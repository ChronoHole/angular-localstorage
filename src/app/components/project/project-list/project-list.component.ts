import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/components/project/project.model';
import { ProjectService } from 'src/app/components/project/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  constructor(private _projectService: ProjectService) {}

  projects$: Observable<Project[]> = this._projectService.projects$;

  ngOnInit(): void {}
}
