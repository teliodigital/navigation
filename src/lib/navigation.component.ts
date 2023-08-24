import {ChangeDetectionStrategy, Component, HostListener, Input, OnInit} from '@angular/core';
import {NavigationItem} from "./types/navigation.interface";
import {NavigationOptions} from "./types/navigation.interface";

@Component({
  selector: 'telio-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this._isMobile = event.target.innerWidth < this._responsiveBreakpoint;
  }

  @Input() navigation: NavigationItem[] = [];
  @Input() options: NavigationOptions | null = null;

  private _responsiveBreakpoint: number = 991;
  private _isExpanded: boolean = false;
  private _isMobile: boolean = false;
  optionStyles: any = {};

  get isExpanded(): boolean {
    return this._isExpanded;
  }

  get isMobile(): boolean {
    return this._isMobile;
  }

  ngOnInit() {
    this._isMobile = window.innerWidth < this._responsiveBreakpoint;

    if (this.options?.responsiveBreakpoint) {
      this._responsiveBreakpoint = this.options.responsiveBreakpoint;
    }

    if (this.options?.maxInnerWidth) {
      this.optionStyles = {
        'max-width': `${this.options.maxInnerWidth}px`
      }
    }
  }

  toggleHolder() {
    this._isExpanded = !this._isExpanded;
  }
}
