import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { ExamService } from '../services/exam.service';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.css']
})
export class CreateExamComponent implements OnInit {
  createExamForm: FormGroup;
  answers: any = [];
  message1 = '(*)Duration should be a number > 0';
  message2= '(*)Should be a number 1~50';
  message3 = '(*)Should be a number > 0'
  categories: any = [];
  exams: any = [];

  isDuplicate1 = false;
  isDuplicate2 = false;
  duplicateMess1 = 'This exam name is duplicate, make another!';
  duplicateMess2 = 'This exam code is duplicate, make another!';
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


  getAllExams(): void {
    this.examService.getAll().subscribe(
      (data) => {
        this.exams = data;
      },
      (error) => {
        console.log(error);
      }
    );
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

  checkDuplicate(isDuplicate){
    for (const x of this.exams) {
      if(x.exam_name === this.exam.exam_name || x.exam_code === this.exam.exam_code) {
        isDuplicate = true
      }
    }
  }

  submit(){
    this.checkDuplicate(this.isDuplicate1);
    this.checkDuplicate(this.isDuplicate2);
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
