import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { FirstComponent } from './component/first/first.component';
import { ListRenderComponent } from './component/list-render/list-render.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ListRenderComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
