import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";
import { ExamService } from '../services/exam.service';


@Component({
    selector: 'notifications-cmp',
    moduleId: module.id,
    templateUrl: 'notifications.component.html'
})

export class NotificationsComponent implements OnInit{
  constructor(
    public router: Router,
    public service: ExamService
    ){}

    exams: any=[];
    currentExam = null;

  ngOnInit():void {
    this.getData();
  }

  getData(): void {
    this.service.getAll()
      .subscribe(
       data => {
          this.exams = data;
       },
       error => {
         console.log(error)
       }
     );
  }

  delete(id: any) {
    if (confirm("Press OK to confirm")){
      this.service.delete(id).subscribe(
        (response) => {
          this.getData();
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

}
