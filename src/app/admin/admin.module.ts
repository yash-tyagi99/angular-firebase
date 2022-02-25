import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListComponent } from './list/list.component';
import { StudentComponent } from './student/student.component';
import { VirtualClassroomComponent } from './virtual-classroom/virtual-classroom.component';


@NgModule({
  declarations: [
    ListComponent,
    StudentComponent,
    VirtualClassroomComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
