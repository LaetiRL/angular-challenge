import { Component, OnInit } from '@angular/core';
import { Order } from './my-form.model';


@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})

export class MyFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  model: Order = new Order();

  onSubmit() {
    // form submitted
    console.log(this.model);
  }

};
