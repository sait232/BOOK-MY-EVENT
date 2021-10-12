import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'user-home',loadChildren: () => import('./modules/user-home/user-home.module').then(m => m.UserHomeModule)},
  {path:'user-login',loadChildren: () => import('./modules/user-login/user-login.module').then(m => m.UserLoginModule)},
  {path:'user-profile',loadChildren: () => import('./modules/user-profile/user-profile.module').then(m => m.UserProfileModule)},
  {path:'user-signup',loadChildren: () => import('./modules/user-signup/user-signup.module').then(m => m.UserSignupModule)},
  {path:'user-admin',loadChildren: () => import('./modules/user-admin/user-admin.module').then(m => m.UserAdminModule)},
  {path:'user-SuperAdmin',loadChildren: () => import('./modules/user-super-admin/user-super-admin.module').then(m => m.UserSuperAdminModule)},
  {path:'admin-home',loadChildren: () => import('./modules/admin-home/admin-home.module').then(m => m.AdminHomeModule)},
  {path:'view-users',loadChildren: () => import('./modules/view-users/view-users.module').then(m => m.ViewUsersModule)},
  {path:'admin-profile',loadChildren: () => import('./modules/admin-profile/admin-profile.module').then(m => m.AdminProfileModule)},
  {path:'search-bar',loadChildren: () => import('./modules/searchbar/searchbar.module').then(m => m.SearchbarModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
