import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  auth: UserService;
  name = "";
  constructor(private service: UserService) { 
    this.auth = service;
    this.auth.getUsersFromDB().subscribe(_response => {
      if (_response.success){
        console.log( _response.data);
        this.users = _response.data[0];
      }
    });
  }

  ngOnInit(): void {
  }

  getname(){
    return this.users[0].name;
  }

}
