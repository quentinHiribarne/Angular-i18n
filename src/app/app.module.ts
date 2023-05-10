import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { LangSelectComponent } from './lang-select/lang-select.component';
import { FormComponent } from './form/form.component';
import { I18nModule } from './core/i18n/i18n.module';

@NgModule({
  declarations: [AppComponent, FormComponent, LangSelectComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  providers: [I18nModule.setLocale(), I18nModule.setLocaleId()],
  bootstrap: [AppComponent],
})
export class AppModule {}
