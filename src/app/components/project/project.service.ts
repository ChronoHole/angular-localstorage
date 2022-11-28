import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Project } from 'src/app/components/project/project.model';
import { StorageService } from '../../shared/services/storage.service';

@Injectable()
export class ProjectService {
  constructor(
    private _localStoreService: StorageService,
    private _router: Router
  ) {}

  private _projects$ = new BehaviorSubject<Project[]>([]);
  public projects$: Observable<Project[]> = this._projects$.asObservable();

  public loadProjects() {
    const projects: Project[] = this._localStoreService.getItems('projects');
    this._projects$.next(projects);
  }

  get projects() {
    return this._projects$.getValue();
  }

  public getProject(id: string) {
    return this.projects.find((project) => project.id == id);
  }
}
