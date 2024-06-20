import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostCardsComponent } from './component/post-cards/post-cards.component';
import { PostFormComponent } from './component/post-form/post-form.component';
import { PostsComponent } from './component/posts/posts.component';
import { PostDashboardComponent } from './component/post-dashboard/post-dashboard.component';
import { MaterialModule } from './material/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostCardsComponent,
    PostFormComponent,
    PostsComponent,
    PostDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
