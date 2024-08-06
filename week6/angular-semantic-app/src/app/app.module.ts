import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SemanticUIModule } from '@angular-ex/semantic-ui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SemanticUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
