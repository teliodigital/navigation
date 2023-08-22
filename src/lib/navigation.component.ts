import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {NavigationItem} from "./types/navigation.interface";

@Component({
  selector: 'telio-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {
  @Input() navigation: NavigationItem[] = [];
}
