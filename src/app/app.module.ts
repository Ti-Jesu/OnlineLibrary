import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
//import { MatToolbarModule, MatIconModule, MatTooltipModule, MatButtonModule } from "@angular/material";
//import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationListComponent } from './notification/notification.component';
import { SiteFrameworkModule } from './site-framework/site-framework.module';

import { NotificationService } from './notification.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, NotificationListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BooksModule,
    UsersModule,
    SiteFrameworkModule, //MatToolbarModule,FlexLayoutModule,
  ],
  bootstrap: [AppComponent],
  providers: [NotificationService],
})
export class AppModule { }
