import { ErrorHandler, NgModule } from '@angular/core';
import { NbCardModule, NbLayoutModule, NbThemeModule } from '@nebular/theme';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';
import { MyErrorHandler } from './shared/services/error-handler.service';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SentryErrorHandler } from './shared/services/sentry-handler.service';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    LayoutModule,

  ],
  providers: [
    { provide: ErrorHandler, useClass: SentryErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
