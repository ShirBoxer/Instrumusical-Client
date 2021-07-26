import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() user: User|undefined;
  constructor(private admin: AdminServiceService) {
    
  }

  ngOnInit(): void {
  }
  adminate(_id:string){
    alert(_id);
  }
  deleteUser(_id:string){
    this.admin.deleteUser(_id).subscribe( _response =>{
      if(_response)
        alert(_response.success);
    })
  }
}
