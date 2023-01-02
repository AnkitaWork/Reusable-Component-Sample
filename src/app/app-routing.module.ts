//External imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Internal imports
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CrudOperationsComponent } from './crud-operations/crud-operations.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResourceLinkComponent } from './resource-link/resource-link.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'crudoperations', component:CrudOperationsComponent },
  { path: 'datagrid', component: DataGridComponent},
  { path: 'resourcelink', component: ResourceLinkComponent},
  { path: '**', component:PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
