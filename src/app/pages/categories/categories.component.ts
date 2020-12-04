import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CategoriesService } from "app/service/categories.service";

@Component({
  selector: "categories-cmp",
  moduleId: module.id,
  templateUrl: "categories.component.html",
})
export class CategoriesComponent implements OnInit {
  categories: any = [];
  currentCategory = null;
  currentIndex = -1;
  category = {
    name: "",
  };

  constructor(private service: CategoriesService,
    private route: Router,
    private router: Router) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.service.getAll().subscribe(
      (data) => {
        this.categories = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  refreshList(): void {
    this.getCategories();
    this.category.name= null;
    this.currentCategory = null;
    this.currentIndex = -1;
  }

  save(): void {
    const data = {
      name: this.category.name,
    };

    this.service.create(data).subscribe(
      (res) => {
        this.refreshList();
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteCategory(id: any) {
    if (confirm("Are you sure?")) {
      this.service.delete(id).subscribe(
        (response) => {
          this.refreshList();
          this.route.navigateByUrl("categories")
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
