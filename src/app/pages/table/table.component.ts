import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../services/user.service";

declare interface TableData {}

@Component({
  selector: "table-cmp",
  moduleId: module.id,
  templateUrl: "table.component.html",
})
export class TableComponent implements OnInit {

  constructor(private route: ActivatedRoute, public service: UserService) {
    
  }

  message='';
  users: any = [];
  currentUser = null;
  isChangedOk = false;

  ngOnInit(): void {
    this.getData();
  }
  getData(): void {
    this.service.getAll().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  changeRole(id): void {
    this.service.changRole(id, this.currentUser).subscribe(
      (data) => {
        this.currentUser = data;
        this.getData();
        console.log(data);
        this.isChangedOk = true;
        this.message = 'Successful'
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
