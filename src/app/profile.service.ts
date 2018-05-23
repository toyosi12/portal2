import { Injectable } from '@angular/core';

@Injectable()
export class ProfileService {
  public x;
  constructor() { }
  getStudentDetails(){
    this.x = [{
      "lname":"Oyelayo","fname":"Toyosi","mname":"Timilehin","dob":"2/2/2",
      "nationality":"Nigerian","origin":"Oyo","mstatus":"Complicated","Phone1":"07066898530","phone2":"0808",
      "email":"toyosioyelayo@gmail.com","address":"P24, Royal Valley Estate, Ilorin","next_of_kin_name":"Fred Jong",
      "kin_phone":"890980","kin_email":"jong@gmail.com"
    }];
    return this.x[0];
  }

}
