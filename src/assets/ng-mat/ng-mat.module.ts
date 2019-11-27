import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule, MatCardModule
  ],
  exports : [
    MatSliderModule, MatCardModule
  ]
})
export class NgMatModule { }
