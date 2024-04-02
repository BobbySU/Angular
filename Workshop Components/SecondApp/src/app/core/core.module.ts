import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadarComponent } from './headar/headar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeadarComponent,
    FooterComponent
  ],
  exports: [
    HeadarComponent,
    FooterComponent
  ]
})
export class CoreModule { }
