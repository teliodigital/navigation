import {ChangeDetectionStrategy, Component, HostListener, Input, OnInit} from '@angular/core';
import {NavigationItem} from "./types/navigation.interface";

@Component({
  selector: 'telio-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this._isMobile = event.target.innerWidth < 991;
  }

  @Input() navigation: NavigationItem[] = [];

  private _isExpanded: boolean = false;
  private _isMobile: boolean = false;

  get isExpanded(): boolean {
    return this._isExpanded;
  }

  get isMobile(): boolean {
    return this._isMobile;
  }

  ngOnInit() {
    this._isMobile = window.innerWidth < 991;
  }

  toggleHolder() {
    this._isExpanded = !this._isExpanded;
  }
}
