import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-todo-list';
  form: FormGroup;
  constructor() {}
  listItem: any[] = []; //In the real project, I will create a model of type listItem with attributes like name, id...
  timer$: Observable<Date>;

  ngOnInit() {
    this.timer$ = timer(0, 1000).pipe(
      map(() => new Date())
    );
    this.form = new FormGroup({
      name: new FormControl('', Validators.required)
    });
  }

  add() {
    if (this.form.invalid) {
      return;
    }
    const value  = {
      name: this.form.value.name,
      checked: false
    };
    this.listItem.push(value); //In the real project, I will create a service to write an add item function to be able to use it in many component
    this.form.patchValue({name: ''});
  }

  remove(index: any) {
    this.listItem.splice(index, 1); //In the real project, I will create a service to write an remove item function to be able to use it in many component
  }
}
