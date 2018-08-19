import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PalabraPage } from './palabra';

@NgModule({
  declarations: [
    PalabraPage,
  ],
  imports: [
    IonicPageModule.forChild(PalabraPage),
  ],
})
export class PalabraPageModule {}
