import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  public studentDetails = [];
  public countries = [
    {value:"Nigeria"},
    {value:"Liberia"},
    {value:"Algeria"}
  ]
  public genders = [
    {value:"Male"},
    {value:"Female"}
  ]
  public maritals = [
    {value:"Single"},
    {value:"Married"}
  ]
  constructor(private _profileService : ProfileService) { }

  ngOnInit() {
    this.studentDetails = this._profileService.getStudentDetails();
  }

}
