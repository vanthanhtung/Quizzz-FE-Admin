import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { ExamService } from '../services/exam.service';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html'
})
export class CreateExamComponent implements OnInit {
  createExamForm: FormGroup;
  answers: any = [];
  message1 = 'Duration should be a number > 0';
  message2= 'Should be a number 1~50';
  message3 = 'Should be a number > 0'
  categories: any = [];

  exam = {
    anabled: true,
    duration: null,
    exam_code: "",
    exam_name: "",
    numberOfQuiz: null,
    score: null,
    category: ""
  }

  constructor(
    public quizService: QuizService,
    public examService: ExamService,
    public categoryService: CategoryService,
    public route: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getAllCategory();
    this.createExamForm = this.fb.group(
      {
        exam_name: ['',[Validators.required]],
        exam_code: ['',[Validators.required]],
        duration: ['',[Validators.required]],
        numberOfQuiz: ['',[Validators.required]],
        score: ['',[Validators.required]]
      }
    )
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
    if (this.exam.duration >0 && this.exam.numberOfQuiz >0 && this.exam.score >0){
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
  }

  cancel(){
      this.route.navigateByUrl("notifications");
  }
}
