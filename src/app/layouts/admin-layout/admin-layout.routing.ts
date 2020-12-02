import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { UserComponent } from "../../pages/user/user.component";
import { TableComponent } from "../../pages/table/table.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UpgradeComponent } from "../../pages/upgrade/upgrade.component";
import { CategoriesComponent } from "app/pages/categories/categories.component";
import { CreateQuizComponent } from 'app/pages/create-quiz/create-quiz.component';
import { CreateExamComponent } from 'app/pages/create-exam/create-exam.component';
import { ExamDetailComponent } from 'app/pages/exam-detail/exam-detail.component';

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "user", component: UserComponent },
  { path: "table", component: TableComponent },
  { path: "typography", component: TypographyComponent },
  { path: "categories", component: CategoriesComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "upgrade", component: UpgradeComponent },
  { path: "createquiz", component: CreateQuizComponent},
  { path: "createexam", component: CreateExamComponent},
  { path: "examDetail/:id", component: ExamDetailComponent}
];
