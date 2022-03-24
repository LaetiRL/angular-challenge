import { Component, OnInit } from '@angular/core';
import { User } from './sign-up.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  user: User = new User();

  onSubmit() {
    // form submitted
    console.log(this.user);
  }
}
