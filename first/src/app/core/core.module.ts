import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Error404Component } from './404/error404.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class CoreModule {

}
