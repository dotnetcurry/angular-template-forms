import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateSuperheroComponent } from './create-superhero/create-superhero.component';
import { CreateDestinationComponent } from './create-destination/create-destination.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateSuperheroComponent,
    CreateDestinationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
