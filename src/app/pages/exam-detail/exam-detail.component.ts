import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamService } from '../services/exam.service';

@Component({
  selector: 'app-exam-detail',
  templateUrl: './exam-detail.component.html'
})
export class ExamDetailComponent implements OnInit {


  currentExam: any = {
    anabled: true,
    duration: 0,
    exam_code: "",
    exam_name: "",
    quizSet: []
  }

  constructor(
    public router: Router,
    public examService: ExamService,
    public route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    const idExam = Number.parseInt(this.route.snapshot.params.id);
    this.getCurrentExam(idExam);
  }

  getCurrentExam(id) {
    this.examService.getById(id)
      .subscribe(
       data => {
          this.currentExam = data;
          console.log(data);
       },
       error => {
         console.log(error)
       }
     );
  }
}
