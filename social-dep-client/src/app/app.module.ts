import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewRequestComponent } from './new-request/new-request.component';
import { ExistingRequestsComponent } from './existing-requests/existing-requests.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewRequestComponent,
    ExistingRequestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
