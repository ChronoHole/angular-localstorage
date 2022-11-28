import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/components/project/project.model';
import { ProjectService } from 'src/app/components/project/project.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss'],
})
export class ProjectFormComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private _projectService: ProjectService
  ) {}
  id: string;
  project: Project | undefined;
  label = 'Изменить';

  ngOnInit(): void {
    this._route.params.subscribe((routeParams) => {
      this.id = routeParams['id'];
      this.project = this._projectService.getProject(this.id);
    });
  }

  onChange() {}
}
