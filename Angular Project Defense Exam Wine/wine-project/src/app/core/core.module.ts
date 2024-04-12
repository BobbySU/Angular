import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeadarComponent } from './headar/headar.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FooterComponent,
    HeadarComponent
  ],
  exports: [
    HeadarComponent,
    FooterComponent
  ]
})
export class CoreModule { }
