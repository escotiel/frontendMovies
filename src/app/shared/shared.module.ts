import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFilmeComponent } from './components/card-filme/card-filme.component';



@NgModule({
  declarations: [
    CardFilmeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[CardFilmeComponent]
})
export class SharedModule { }
