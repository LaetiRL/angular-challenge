import { Component, OnInit } from '@angular/core';

@Component({
  selector:  'validation-button',
  template:  "<button> Validé </button>" // ou './validation-button.component.html'
  }
)
export class ValidationButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
