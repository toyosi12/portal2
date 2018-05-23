import { Component, OnInit, HostListener,ViewChild } from '@angular/core';
import { COMPANIES } from '../companies';
import { ITEMS } from '../sidenav-items';
import { CompanyDetailsService } from '../company-details.service';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  public _companies = [];
  public items = ITEMS;
  public smallScreen;
  constructor(private _companyDetailsService : CompanyDetailsService) { }

  ngOnInit() {
    this._companies = this._companyDetailsService.getDetails();
  }
  @ViewChild('sidenav') sidenav

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.configureSideNav();
  }
  @HostListener('window:load', ['$event'])
  onLoad(event) {
    this.configureSideNav();
  }

  configureSideNav() {
    this.smallScreen = window.innerWidth < 501 ? true : false;
    if (!this.smallScreen) {
      this.sidenav.mode = "side";
      this.sidenav.opened = true;
    } else {
      this.sidenav.mode = 'over';
      this.sidenav.opened = false;
    }
  }


}

