import { Component } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database'
import {Observable} from 'rxjs'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  description = 'Angular-Fire-Base';
  itemValue = '';
  items: Observable<any[]>;
  constructor(){
    this.items = db.list('items').valueChanges();
  }
  onSubmit(){
    this.db.list('items').push({
      content: this.itemValue
    });
    this.itemValue = '',
  }
}
