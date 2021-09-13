import { Component, Input, OnInit } from '@angular/core';
import { ReactiveControl } from '@czemar/reactive-forms';
import { ValidationErrors } from '@czemar/reactive-forms/inerfaces/validation-error.interface';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

  @Input() control: ReactiveControl = new ReactiveControl();
  @Input() label: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
