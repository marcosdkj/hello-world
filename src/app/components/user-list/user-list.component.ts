import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  private userList:any;

  constructor( private _users : UserService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this._users.getAllUser().subscribe(
      (x:User) => this.userList = x,
      err => console.log('Error'), // TODO : añadir mensaje de error
      () => console.log(this.userList, typeof this.userList)
    )
  }

  addUser(){
    console.log('dentrp');
    let user = {
      Name:'test2',
      Birthdate: new Date
    }
    this._users.postUser(user).subscribe(
     ()=> this.loadData()
    )
  }

  deleteUser(id : number){
    this._users.deleteUser(id).subscribe(
      () => this.loadData()
    )
  }

  updateUser(user : User){
    user.Name = 'editado'
    this._users.updateUser(user).subscribe(data =>{console.log('dione',data)})
  }

}
