import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-tuition',
  templateUrl: './pay-tuition.component.html',
  styleUrls: ['./pay-tuition.component.css']
})
export class PayTuitionComponent implements OnInit {
  public values = [
    {id:1,service:'NBTS Exams Fees',amount:5000},
    {id:2,service:'Dissertation Supervision Fee',amount:9000},
    {id:3,service:'Internet Facilities',amount:12000},
    {id:4,service:'Services and Maintenance Fee',amount:12000},
    {id:5,service:'NBTS Tuition Fee',amount:12000},
    {id:6,service:'Capital Development Contribution	',amount:7500},
    {id:7,service:'OJOT Journal	',amount:3000},
    {id:8,service:'Nigerian Baptist Magazine	',amount:1800},
    {id:9,service:'NBTS Gown per event',amount:750},
    {id:10,service:'Student Hand Book',amount:1000},
    {id:11,service:'Seminary Catalogue',amount:1000},
    {id:12,service:'Student Identity Card.',amount:1000},
    {id:13,service:'Ministers Conference',amount:2000},
    {id:14,service:'Library Fee',amount:4000},
    {id:15,service:'Result Confirmation',amount:1000},
    {id:16,service:'Sporting & Recreation',amount:2000},
    {id:17,service:'Minimester/Special Seminars Fee',amount:5000},
    {id:18,service:'Teaching Practice Fee',amount:2000}
  ];

  public summary = [
    {service:'Bank Charges',amount:2000},
    {service:'Total Amount',amount:''},
    {service:'Amount Paid',amount:''},
    {service:'Amount Due',amount:''},
    {service:'Amount Paying',amount:''},
    {service:'Amount in words',amount:''}
  ]
  constructor() { }

  ngOnInit() {
  }
  

}
