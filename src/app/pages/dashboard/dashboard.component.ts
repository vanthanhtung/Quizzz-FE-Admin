import { Component, OnInit } from "@angular/core";
import { ExamService } from '../services/exam.service';
import {RecordService} from '../services/record.service'

@Component({
  selector: "dashboard-cmp",
  moduleId: module.id,
  templateUrl: "dashboard.component.html",
})
export class DashboardComponent implements OnInit {

  records: any=[];

  constructor(
    public examService: ExamService,
    public recordService: RecordService
  ) {}

  ngOnInit() {
    this.getAllRecords();
    }

  getAllRecords(): void {

    this.recordService.getAll()
      .subscribe(
       data => {
          this.records = data;
       },
       error => {
         console.log(error)
       }
     );
  }
}
