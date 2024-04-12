import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { PairingComponent } from './pairing/pairing.component';
import { RegionsComponent } from './regions/regions.component';
import { TastingComponent } from './tasting/tasting.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AboutComponent,
    PairingComponent,
    RegionsComponent,
    TastingComponent
  ],
  exports: [
    AboutComponent,
    PairingComponent,
    RegionsComponent,
    TastingComponent
  ]
})
export class SectionsModule { }
