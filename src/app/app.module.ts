import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxDefaultAvatarModule } from 'projects/ngx-default-avatar/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxDefaultAvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
