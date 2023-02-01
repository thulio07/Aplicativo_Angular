import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './components/top/top.component';
import { PanelComponent } from './components/panel/panel.component';
import { ProgressComponent } from './components/progress/progress.component';
import { AttemptsComponent } from './components/attempts/attempts.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    PanelComponent,
    ProgressComponent,
    AttemptsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
