import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-todo-list';
  form: FormGroup;
  constructor() {}
  listItem: any[] = [];
  now: Date;

  ngOnInit() {
    setInterval(() => {
      this.now = new Date();
    }, 1);
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
    this.listItem.push(value);
    this.form.patchValue({name: ''});
  }

  remove(index: any) {
    this.listItem.splice(index, 1);
  }
}
