import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot([
       { path: '', loadChildren: './css-tuts/css.routing.module#CssRoutingModule'}
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


