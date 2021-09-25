import { Component, Input, OnInit } from '@angular/core';
import { EIconPrefix } from '../../enums/icon-prefix.enum';

@Component({
  selector: 'ame-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() set icon(value: string) {
    this._icon = value;

    this.recalculateprefix();
  }

  public get icon(): string {
    return this._icon;
  }

  public get prefix(): EIconPrefix {
    return this._prefix;
  }

  public get rawIcon(): string {
    return this._rawIcon;
  }

  public EIconPrefix = EIconPrefix;

  private _prefix!: EIconPrefix;
  private _icon!: string;
  private _rawIcon!: string;

  private readonly customIconsPath = '/assets/icons/';

  constructor() {}

  ngOnInit(): void {
    
  }

  protected recalculateprefix(): void {
    const { icon } = this;

    const splitted = icon?.split(':');
    if (splitted?.length) {
      if (Object.values(EIconPrefix).includes(splitted[0] as EIconPrefix)) {
        this._prefix = splitted[0] as EIconPrefix;

        this.recalculateRawIcon(splitted[1]);
      } else {
        console.error(`Unknown icon prefix: '${splitted[0]}', (should be one from the following: ${Object.values(EIconPrefix).join(', ')})`);
      }
    }
  }

  protected recalculateRawIcon(iconName: string): void {
    switch (this._prefix) {
      case EIconPrefix.CUSTOM:
        this._rawIcon = `${this.customIconsPath}${iconName}.svg`;
        break;
      case EIconPrefix.FONT_AWESOME:
        this._rawIcon = `fa${iconName}`;
        break;
      case EIconPrefix.MATERIAL:
        this._rawIcon = iconName;
        break;
    }
  }

}
