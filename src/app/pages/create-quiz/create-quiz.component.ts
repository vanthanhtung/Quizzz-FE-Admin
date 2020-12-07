import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from "../services/category.service";
import { QuizService } from "../services/quiz.service";
@Component({
  selector: "app-create-quiz",
  templateUrl: "./create-quiz.component.html",
})
export class CreateQuizComponent implements OnInit {
  createQuizForm: FormGroup;
  quizes: any = [];
  duplicateMess = 'You have this quiz already, make another!';
  duplicateMess2 = 'Each answer must be different from each other!'

  categoryId: 0;
  isDuplicate = false;
  isDuplicate2 = false;
  answer1 =  {
    content: '',
    _correct: true
  }
  answer2 =  {content: '', _correct: false}
  answer3 =  {content: '', _correct: false}
  answer4 =  {content: '', _correct: false}

  quiz = {
    content: "",
    type : 1,
    level: "",
    _active: true,
    category: {
      id: null,
    },
    answers: []
  };

  constructor(
    public service: QuizService,
    public categoryService: CategoryService,
    private route: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getData();
    this.getAllCategory();
    this.createQuizForm = this.fb.group(
      {
        content: ['',[Validators.required]],
        answer1: ['',[Validators.required]],
        answer2: ['',[Validators.required]],
        answer3: ['',[Validators.required]],
        answer4: ['',[Validators.required]]
      }
    )
  }
  getData(): void {
    this.service.getAll().subscribe(
      (data) => {
        this.quizes = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  checkDuplicate(){
    for (const x of this.quizes) {
      if(x.content === this.quiz.content) {
        this.isDuplicate = true
      }
    }
  }

  // checkDuplicate2(){
  //   if(this.answer1.content === this.answer2.content ||
  //     this.answer1.content === this.answer3.content ||
  //     this.answer1.content === this.answer4.content ||
  //     this.answer2.content === this.answer3.content ||
  //     this.answer2.content === this.answer4.content||
  //     this.answer3.content === this.answer4.content
  //     ){
  //       debugger
  //     this.isDuplicate2 = true;
  //   }
  // }

  categories: any = [];

  getAllCategory(): void {
    this.categoryService.getAll().subscribe(
      (data) => {
        this.categories = data;
        this.getData();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  createNew(): void {
    this.checkDuplicate();
    // this.checkDuplicate2();
      this.quiz.answers.push(this.answer1,this.answer2,this.answer3,this.answer4);
      this.service.create(this.quiz).subscribe(
      (response) => {
        this.route.navigateByUrl("typography")
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
