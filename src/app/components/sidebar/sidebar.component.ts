import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'ame-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterContentInit {

  @Input() logo?: string;
  @Input() label?: string;

  public get isOpen(): boolean { return this._isOpen; }
  public get animate(): boolean { return this._animate; }

  private _isOpen: boolean = false;
  private _animate: boolean = false;

  constructor(private pageService: PageService) {
    this.pageService.sidebarComponent = this;
  }

  ngOnInit(): void { }

  ngAfterContentInit(): void {
    this._animate = true;
  }

  public open() {
    this._isOpen = true;
  }

  public close() {
    this._isOpen = false;
  }

  public toggle() {
    if (this.isOpen) {
      return this.close();
    }
    return this.open();
  }

}
