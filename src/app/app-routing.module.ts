import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WellcomeComponent } from './components/wellcome/wellcome.component';
import {UserListComponent} from './components/user-list/user-list.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

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
        component :UserListComponent,
      },
      {
          path: 'edit/:id',
          loadChildren: './components/edit-user/edit-user.module#EditUserModule'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
