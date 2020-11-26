import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service'

declare interface TableData {
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{

    constructor(
      public service: UserService
    ){}

    users: any=[];
    currentUser = null;

    ngOnInit(): void {
        this.getData();
    }
    getData(): void {
      debugger
      this.service.getAll()
        .subscribe(
          data => {
            this.users = data;
          },
          error => {
            console.log(error)
          }
        );
    }
}
