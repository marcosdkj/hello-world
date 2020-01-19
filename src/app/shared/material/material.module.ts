import { NgModule } from '@angular/core';
import {MatButtonModule,
   MatIconModule,
   MatToolbarModule
   ,MatExpansionModule
   ,MatTableModule,
   MatInputModule,
   MatDatepickerModule,
   MatNativeDateModule,
   MatTooltipModule
  } from '@angular/material';


const materialComponents = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatTableModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTooltipModule
]

@NgModule({

  imports: [materialComponents],
  exports:[materialComponents]
})
export class MaterialModule { }
