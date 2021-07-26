import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AdminServiceService } from '../admin-service.service';

enum TAB{
  UNKNOWN=0,
  USERS=1,
  CATEGORIES=2,
  INSTRUMENTS=3,
  STORES=4,
  ORDERS=5
}

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  auth: UserService;
  currentTab: TAB;
  totRevCount: number;

  constructor( 
    private admin : AdminServiceService,
    private authService: UserService) {
    this.auth = this.authService;
    this.currentTab = TAB.INSTRUMENTS;
    this.totRevCount = -1;
  }
  
  ngOnInit(): void {} 

  switchTab(_tabName:string){
    this.currentTab = this.getTabByName(_tabName);
  }

  public matchTab(_tabName:string): boolean{
    return this.currentTab == this.getTabByName(_tabName);
  }


  private getTabByName(_tabName:string):TAB{
    switch(_tabName){
      case "users": return TAB.USERS;
      case "categories": return TAB.CATEGORIES;
      case "instruments": return TAB.INSTRUMENTS;
      case "stores": return TAB.STORES;
      case "orders": return TAB.ORDERS;
      default: return TAB.UNKNOWN;
    }
  }

  public countOfReviews(){
    this.admin.countOfReviews().subscribe((respond)=>{
      alert(`the total amount of reviews is : ${JSON.stringify(respond.value)}`);
    });
  }
}
