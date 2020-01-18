import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  private userForm =this.formBuilder.group({
    name:[''],
    birthdate:['']
  })

  constructor(private formBuilder : FormBuilder,private _user : UserService) { }

  ngOnInit() {
  }

  onSubmit() {

    let user:User = {
      Name : this.userForm.get('name').value,
      Birthdate : new Date(this.userForm.get('birthdate').value)
    }

    this._user.postUser(user).subscribe(
      ()=> console.log('listo')
    );

  }

}
