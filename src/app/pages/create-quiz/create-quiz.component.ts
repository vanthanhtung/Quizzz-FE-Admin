import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { QuizService } from '../services/quiz.service';
@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
})
export class  CreateQuizComponent implements OnInit {
  quizes: any=[];

  categoryId: 0;

   quiz= {
    content:"",
    type: "",
    level:"",
    score: 0,
    is_active: true,
    category: {
      id:null
    }
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

  categories: any = [];

  getAllCategory(): void {

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
    this.service.create(this.quiz).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
