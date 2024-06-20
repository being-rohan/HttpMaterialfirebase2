import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';




let arr = [
  MatSidenavModule,
  MatToolbarModule,
  MatDialogModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatSnackBarModule

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...arr
  ],
  exports: [
    ...arr
  ]
})
export class MaterialModule { }
