import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ame-dark-background',
  templateUrl: './dark-background.component.html',
  styleUrls: ['./dark-background.component.scss']
})
export class DarkBackgroundComponent implements OnInit {

  @Input() visible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
