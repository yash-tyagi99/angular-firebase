import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from './list/list.component';
import {StudentComponent} from './student/student.component';
import {VirtualClassroomComponent} from './virtual-classroom/virtual-classroom.component';
const routes: Routes = [
  {
    path:'list',component:ListComponent
  },
  {
    path:'student',component:StudentComponent
  },
  {
    path:'virtual-classroom',component:VirtualClassroomComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
