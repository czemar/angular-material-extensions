import { Component, Input, OnInit } from '@angular/core';
import { ReactiveControl } from '@czemar/reactive-forms';

@Component({
  selector: 'ame-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

  @Input() control: ReactiveControl = new ReactiveControl();

  /**
   * @TODO
   */
  @Input() label: string = '';
  @Input() placeholder: string = 'ex. Hello world!';

  /**
   * @TODO
   */
  @Input() hint: string = '';

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
