import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { QuizService } from '../services/quiz.service';
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

  constructor(
    public service: QuizService,
    public categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getData();
    this.getAllCategory();
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

  currentQuiz = null;

  categories: any = [];

  getAllCategory(): void {
    debugger
    this.categoryService.getAll()
      .subscribe(
        data => {
          this.categories = data;
          this.getData();
        },
        error => {
          console.log(error)
        }
      );
  }

  createNew(): void{
    const data = {
      content: this.quiz.content,
      type: this.quiz.type,
      level: this.quiz.level,
      score: this.quiz.score,
      is_active: true
    };

    this.service.create(data).subscribe(
      (response) => {
        console.log(response);

      },
      (error) => {
        console.log(error);
      }
    );
  }
}
