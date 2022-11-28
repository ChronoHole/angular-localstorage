import {
  NgModule
}

from '@angular/core';

import {
  RouterModule,
  Routes
}

from '@angular/router';

import {
  DataParserComponent
}

from './components/data-parser/data-parser.component';

import {
  NotFoundComponent
}

from './components/not-found/not-found.component';

import {
  ProjectComponent
}

from './components/project/project.component';

import {
  UserComponent
}

from './components/user/user.component';

const routes: Routes=[ {
  path: '',
    component: DataParserComponent,
}

,
  {
  path: 'projects', component: ProjectComponent
}

,
  {
  path: 'projects/:id', component: ProjectComponent
}

,
  {
  path: 'users', component: UserComponent
}

,
  {
  path: '**', component: NotFoundComponent
}

,
];

@NgModule( {
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  }

) export class AppRoutingModule {}