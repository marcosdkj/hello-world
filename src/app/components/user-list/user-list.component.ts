import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';
import {MatTableDataSource} from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  private userList:any;
  private displayedColumns : string[] = ['id','name','birthdate','actions'];
  private loading = false;

  constructor( private _users : UserService,private _toastr: ToastrService) { }

  ngOnInit() {
    this.loadData();
  }
  /**
   * Funcion que trae todos los usuarios d e la api
   */
  loadData(){
    this.loading = true;
    this._users.getAllUser().subscribe(
      (x:any) =>{ 
        this.userList = new MatTableDataSource(x);
        this.loading = false;
      } ,
      err =>{
      this._toastr.error('Error!', 'Ha ocurrido un error inexperado!');
      this.loading = false;
    },
      () => console.log(this.userList, typeof this.userList)
    )
  }


/**
 * Funcion que borra un usuario de la api
 * @param id 
 */
  deleteUser(id : number){
    this._users.deleteUser(id).subscribe(
      () => {
        this._toastr.success('Exito!', 'Usuario Eliminado Correctamente!')
        this.loadData();
      },
      err => this._toastr.error('Error!', 'Ha ocurrido un error inexperado!')
    )
  }
  /**
   * Funcion para filtar elementos de la tabla
   * @param filterValue 
   */
  applyFilter(filterValue: string) {
    this.userList.filter = filterValue.trim().toLowerCase();
  }


}
