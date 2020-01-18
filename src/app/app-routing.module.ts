import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WellcomeComponent } from './components/wellcome/wellcome.component';
import {UserListComponent} from './components/user-list/user-list.component';

const routes: Routes = [
  {
    path:'', 
    component : WellcomeComponent,
    children:[
      {
        path: 'create',
        loadChildren: './components/create-user/create-user.module#CreateUserModule'
      },
      {
        path: 'listar',
        component :UserListComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
