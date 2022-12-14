import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CoreModule} from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    ThemeListComponent,
    RecentPostsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
