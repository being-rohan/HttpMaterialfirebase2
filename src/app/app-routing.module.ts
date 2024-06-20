import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDashboardComponent } from './component/post-dashboard/post-dashboard.component';

const routes: Routes = [
  {
    path: 'posts',
    component: PostDashboardComponent,
  },
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
