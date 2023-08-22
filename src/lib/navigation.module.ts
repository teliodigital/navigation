import {NgModule} from '@angular/core';
import {NavigationComponent} from './navigation.component';
import {CommonModule} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule {
}
