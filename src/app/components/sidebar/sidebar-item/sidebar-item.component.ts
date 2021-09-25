import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ame-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent implements OnInit {

  @Input() label!: string;
  @Input() icon?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
