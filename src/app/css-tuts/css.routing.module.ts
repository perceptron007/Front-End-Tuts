import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ 
    LabelAnimationComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', component: 'LabelAnimationComponent' },
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class CssRoutingModule {}


