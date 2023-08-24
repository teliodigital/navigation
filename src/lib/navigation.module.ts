import {NgModule} from '@angular/core';
import {NavigationComponent} from './navigation.component';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule {
}
