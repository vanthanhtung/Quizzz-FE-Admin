import { Component, OnInit } from '@angular/core';
import {QuizService} from '../services/quiz.service'

@Component({
    selector: 'typography-cmp',
    moduleId: module.id,
    templateUrl: 'typography.component.html'
})

export class TypographyComponent implements OnInit{

  constructor(
    public service: QuizService
  ){}

  quizes: any=[];
  currentQuiz = null;

  ngOnInit(): void {
    this.getData();
 }
  getData(): void {
    this.service.getAll()
      .subscribe(
       data => {
          this.quizes = data;
       },
       error => {
         console.log(error)
       }
     );
  }

  delete(id): void{
    this.service.delete(id).subscribe(
      (response) => {
        this.getData();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
