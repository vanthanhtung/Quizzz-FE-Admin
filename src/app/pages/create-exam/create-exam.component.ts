import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamService } from '../services/exam.service';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html'
})
export class CreateExamComponent implements OnInit {

  quizes: any = [];
  categories: any = [];
  answers: any = [];

  quiz = {
    content: "",
    type: "",
    level: "",
    _active: true,
    category: {
      id: null,
    },
    answers: []
  };



  exam = {
    anabled: true,
    duration: 0,
    exam_code: "",
    exam_name: "",
    numberOfQuiz:0
  }

  constructor(
    public quizService: QuizService,
    public examService: ExamService,
    public route: Router
  ) { }

  ngOnInit(): void {
    this.getAllQuiz();
  }

  getAllQuiz(): void {
    this.quizService.getAll().subscribe(
      (data) => {
        this.quizes = data;
        console.log(data);
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
