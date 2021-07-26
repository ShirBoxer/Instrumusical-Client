import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { Instrument } from 'src/app/models/instrument';

enum TAB {
  UNKNOWN = 0,
  USERS = 1,
  CATEGORIES = 2,
  INSTRUMENTS = 3,
  STORES = 4,
  ORDERS = 5
}

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit, OnDestroy {

  auth: UserService;
  admin: AdminServiceService;
  currentTab: TAB;

  constructor(private authService: UserService,
    private adminService: AdminServiceService,
    private router: Router) {

    this.auth = authService;
    this.admin = adminService;
    this.currentTab = TAB.INSTRUMENTS;

  }

  ngOnInit(): void {
    
  }

  ngOnDestroy() {
  }


  switchTab(_tabName: string) {
    this.currentTab = this.getTabByName(_tabName);
  }

  public matchTab(_tabName: string): boolean {
    return this.currentTab == this.getTabByName(_tabName);
  }

  private getTabByName(_tabName: string): TAB {
    switch (_tabName) {
      case "users": return TAB.USERS;
      case "categories": return TAB.CATEGORIES;
      case "instruments": return TAB.INSTRUMENTS;
      case "stores": return TAB.STORES;
      case "orders": return TAB.ORDERS;
      default: return TAB.UNKNOWN;
    }
  }
}
