import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';


// const appRoutes: Routes = [
//   { path: '', redirectTo: 'projects', pathMatch: 'full' },
//   { path: 'projects', component: ProjectsComponent },
//   { path: 'about', component: AboutComponent }
// ];

const appRoutes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  { path: ':page', component: HeaderComponent }
];


export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);