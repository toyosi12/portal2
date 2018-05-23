import { Injectable } from '@angular/core';

@Injectable()
export class CompanyDetailsService {
  public x;
  constructor() { }
  getDetails(){
    this.x = [
      {"id":1, "name":"SCICT", "color":"#2E3091","logo":"assets/images/scict-logo.png"},
      {"id":2, "name":"NBTS", "color":"green","logo":"assets/images/scict-logo.png"},
      {"id":3, "name":"MIT", "color":"black","logo":"assets/images/scict-logo.png"}
    ];
    return this.x[0];
  }

}
