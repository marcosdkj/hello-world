import { NgModule } from '@angular/core';
import {MatButtonModule,
   MatIconModule,
   MatToolbarModule
   ,MatExpansionModule
   ,MatTableModule,
   MatInputModule,
   MatDatepickerModule,
   MatNativeDateModule  
  } from '@angular/material';


const materialComponents = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatTableModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule
]

@NgModule({

  imports: [materialComponents],
  exports:[materialComponents]
})
export class MaterialModule { }
