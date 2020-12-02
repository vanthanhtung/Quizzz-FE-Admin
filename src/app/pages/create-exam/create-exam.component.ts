import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { ExamService } from '../services/exam.service';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html'
})
export class CreateExamComponent implements OnInit {

  answers: any = [];

  categories: any = [];

  exam = {
    anabled: true,
    duration: 0,
    exam_code: "",
    exam_name: "",
    numberOfQuiz:0,
    category: ""
  }

  constructor(
    public quizService: QuizService,
    public examService: ExamService,
    public categoryService: CategoryService,
    public route: Router
  ) { }

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory(): void {
    this.categoryService.getAll().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  submit(){
    this.examService.create(this.exam).subscribe(
      (response) => {
        this.route.navigateByUrl("notifications")
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cancel(){
      this.route.navigateByUrl("notifications");
  }
}
