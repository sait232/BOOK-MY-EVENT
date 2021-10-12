import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchbarComponent } from './searchbar.component';
import { SearchbarModule } from './searchbar.module';

const routes: Routes = [
  {path:'',component:SearchbarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchbarRoutingModule { }
