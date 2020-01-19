import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditUserRoutingModule } from './edit-user-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import {EditUserComponent} from './edit-user.component';




@NgModule({
  declarations: [EditUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    EditUserRoutingModule
  ]
})
export class EditUserModule { }
