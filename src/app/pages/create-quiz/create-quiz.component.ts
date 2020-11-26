import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
})
export class CreateQuizComponent implements OnInit {

  quizes: any=[];

   quiz= {
    content:"",
    type: "",
    level:"",
    score: 0,
    is_active: true
  }

  constructor() { }

  ngOnInit(): void {
  }

  createNew(){}
}
