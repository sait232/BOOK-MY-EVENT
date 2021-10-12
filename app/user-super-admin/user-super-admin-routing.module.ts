import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSuperAdminComponent } from './user-super-admin.component';

const routes: Routes = [
  {path:'',component:UserSuperAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSuperAdminRoutingModule { }
