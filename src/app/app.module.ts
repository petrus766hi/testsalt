import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component'
import { VideosComponent } from './components/videos/videos.component';
import { ActivityComponent } from './components/activity/activity.component';
import { PeopleComponent } from './components/people/people.component';
import { DocumentComponent } from './components/document/document.component';
import { ChannelsComponent } from './components/channels/channels.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    VideosComponent,
    ActivityComponent,
    PeopleComponent,
    DocumentComponent,
    ChannelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
