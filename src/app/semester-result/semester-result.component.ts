import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semester-result',
  templateUrl: './semester-result.component.html',
  styleUrls: ['./semester-result.component.css']
})
export class SemesterResultComponent implements OnInit {
  public details = [
    {
      "level":100,
        "tab":
          [
            {"course_code":"CSE 102", "course_title":"Into to computing", "grade":"A","units":4, "marks":72,"gp":4.3,"tgp":10},
            {"course_code":"CSE 109", "course_title":"Python Programming", "grade":"A","units":4, "marks":77,"gp":4.3,"tgp":10},
            {"course_code":"CSE 131", "course_title":"Artificial Intelligence", "grade":"A","units":4, "marks":72,"gp":4.3,"tgp":10},
            {"course_code":"CSE 171", "course_title":"Algebra", "grade":"A","units":4, "marks":72,"gp":4.3,"tgp":10},
            {"course_code":"CSE 199", "course_title":"Into to computing", "grade":"A","units":4, "marks":72,"gp":4.3,"tgp":10},
          ]
  },

  {
    "level":200,
      "tab":
        [
          {"course_code":"CSE 202", "course_title":"Into to computing", "grade":"A","units":4, "marks":72,"gp":4.3,"tgp":10},
          {"course_code":"CSE 209", "course_title":"Python Programming", "grade":"A","units":4, "marks":77,"gp":4.3,"tgp":10},
          {"course_code":"CSE 231", "course_title":"Artificial Intelligence", "grade":"A","units":4, "marks":72,"gp":4.3,"tgp":10},
          {"course_code":"CSE 271", "course_title":"Algebra", "grade":"A","units":4, "marks":72,"gp":4.3,"tgp":10},
          {"course_code":"CSE 299", "course_title":"Into to computing", "grade":"A","units":4, "marks":72,"gp":4.3,"tgp":10},
        ]
},

{
  "level":300,
    "tab":
      [
        {"course_code":"CSE 302", "course_title":"Into to computing", "grade":"A","units":4, "marks":72,"gp":4.3,"tgp":10},
        {"course_code":"CSE 309", "course_title":"Python Programming", "grade":"A","units":4, "marks":77,"gp":4.3,"tgp":10},
        {"course_code":"CSE 331", "course_title":"Artificial Intelligence", "grade":"A","units":4, "marks":72,"gp":4.3,"tgp":10},
        {"course_code":"CSE 371", "course_title":"Algebra", "grade":"A","units":4, "marks":72,"gp":4.3,"tgp":10},
        {"course_code":"CSE 399", "course_title":"Into to computing", "grade":"A","units":4, "marks":72,"gp":4.3,"tgp":10},
      ]
},

{
  "level":400,
    "tab":
      [
        {"course_code":"CSE 402", "course_title":"Into to computing", "grade":"A","units":4, "marks":72,"gp":4.3,"tgp":10},
        {"course_code":"CSE 409", "course_title":"Python Programming", "grade":"A","units":4, "marks":77,"gp":4.3,"tgp":10},
        {"course_code":"CSE 431", "course_title":"Artificial Intelligence", "grade":"A","units":4, "marks":72,"gp":4.3,"tgp":10},
        {"course_code":"CSE 471", "course_title":"Algebra", "grade":"A","units":4, "marks":72,"gp":4.3,"tgp":10},
        {"course_code":"CSE 499", "course_title":"Into to computing", "grade":"A","units":4, "marks":72,"gp":4.3,"tgp":10},
        {"course_code":"CSE 499", "course_title":"Into to computing", "grade":"A","units":4, "marks":72,"gp":4.3,"tgp":10},
        {"course_code":"CSE 499", "course_title":"Into to computing", "grade":"A","units":4, "marks":72,"gp":4.3,"tgp":10},
      ]
},

{
  "level":500,
    "tab":
      [
        {"course_code":"CSE 502", "course_title":"Into to computing", "grade":"A","units":4, "marks":72,"gp":4.3,"tgp":10},
        {"course_code":"CSE 509", "course_title":"Python Programming", "grade":"A","units":4, "marks":77,"gp":4.3,"tgp":10},
        {"course_code":"CSE 531", "course_title":"Artificial Intelligence", "grade":"A","units":4, "marks":72,"gp":4.3,"tgp":10},
        {"course_code":"CSE 571", "course_title":"Algebra", "grade":"A","units":4, "marks":72,"gp":4.3,"tgp":10},
        {"course_code":"CSE 599", "course_title":"Into to computing", "grade":"A","units":4, "marks":72,"gp":4.3,"tgp":10},
      ]
},

  
  ]
  constructor() { }

  ngOnInit() {
  }

}
