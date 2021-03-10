import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {DateService} from './services/date.service';
import {AppComponent} from './app.component';
import {BaseLayoutComponent} from './components/base-layout/base-layout.component';
import {MonthSwitcherComponent} from './components/month-switcher/month-switcher.component';
import { TableComponent } from './components/table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    MonthSwitcherComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    DateService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
