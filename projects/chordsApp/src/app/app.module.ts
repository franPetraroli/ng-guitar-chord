import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuitarChordModule } from 'guitar-chord';
import { ChordTestComponent } from './chord-test/chord-test.component';

@NgModule({
  declarations: [AppComponent, ChordTestComponent],
  imports: [BrowserModule, AppRoutingModule, GuitarChordModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
