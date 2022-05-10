import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExistingRequestsComponent } from './existing-requests/existing-requests.component';
import { NewRequestComponent } from './new-request/new-request.component';

const routes: Routes = [
  {path: 'new-request', component: NewRequestComponent},
  {path: 'existing-requests', component: ExistingRequestsComponent},
  {path: '', redirectTo:'/new-request', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
