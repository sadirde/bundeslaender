import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StateComponent } from './state/state.component';
import { StateTileComponent } from './state-tile/state-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StateComponent,
    StateTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
