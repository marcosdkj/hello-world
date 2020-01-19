import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  private userForm =this.formBuilder.group({
    name:['',Validators.required],
    birthdate:['',Validators.required]
  })

  constructor(private formBuilder : FormBuilder,
    private _user : UserService,
    private _toastr: ToastrService,
    private location: Location) { }

  ngOnInit() {
  }

  /**
   * Funcion llamada al pulsar enviar, que nos crea un usuaio en la api
   */
  onSubmit() {

    let user:User = {
      Name : this.userForm.get('name').value,
      Birthdate : new Date(this.userForm.get('birthdate').value)
    }
    this._user.postUser(user).subscribe(
      ()=> this._toastr.success('Exito!', 'Usuario Añadido Correctamente!'),
      err => this._toastr.error('Error!', 'Ha ocurrido un error inexperado!')
    );

  }
  /**
   * funcion para volver atras
   */

  goBack() {
    this.location.back();
  }

}
