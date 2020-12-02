import { Component, OnInit } from '@angular/core';
import { RecordService } from 'app/service/record.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
})
export class RecordComponent implements OnInit {
  records = [];
  currentRecord = null;
  currentIndex = -1;
  record:any = null;


  constructor(private recordService : RecordService) { }

  ngOnInit(): void {
  }


  getRecords():void{
    this.recordService.getAll().subscribe(
      data => {
        this.records = data;
        console.log(data)
      }, error => {
        console.log(error)
      }
    )
  }
}
