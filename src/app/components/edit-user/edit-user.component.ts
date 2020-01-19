import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user.model';

import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  private userForm = this.formBuilder.group({
    name: ['', Validators.required],
    birthdate: ['', Validators.required]
  })

  constructor(
    private formBuilder: FormBuilder,
    private rutaActiva: ActivatedRoute,
    private _user: UserService,
    private _toastr: ToastrService,
    private location: Location) { }

  ngOnInit() {
    this.loadData();
  }
  /**
   * Funcion que nos trae los datos de la API de un Usuario
   */
  loadData() {
    this._user.getUser(this.rutaActiva.snapshot.params.id).subscribe(
      (data: any) => {
        this.userForm.setValue(
          { name: data.name, birthdate: data.birthdate })
      }
    )
  }
/**
 * funcion que actualizar los datos de un usario en la APi
 */
  updateUser() {
    var user: User = {
      Id: this.rutaActiva.snapshot.params.id,
      Name: this.userForm.get('name').value,
      Birthdate: this.userForm.get('birthdate').value
    }
    this._user.updateUser(user).subscribe(
      () => this._toastr.success('Exito!', 'Usuario Editado Correctamente!'),
      err => this._toastr.error('Error!', 'Ha ocurrido un error inexperado!')
    )
  }
/**
 * funcion para volver atras
 */
  goBack() {
    this.location.back();
  }

}
