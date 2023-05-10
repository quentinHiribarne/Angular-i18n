import { Component } from '@angular/core';

@Component({
  selector: 'app-lang-select',
  templateUrl: './lang-select.component.html',
  styleUrls: ['./lang-select.component.css'],
})
export class LangSelectComponent {
  // Get the navigator language
  navigatorLang = window.navigator.language;

  // If local set in localStorage set default language to it else set it to navigator language or 'en' if not available
  defaultLang = localStorage.getItem('locale') || this.navigatorLang || 'en';

  changeLocale(locale: string) {
    // If no locale is provided, default to 'en'
    if (!locale) {
      locale = this.defaultLang;
    }

    // Store the user's preferred locale in localStorage
    localStorage.setItem('locale', locale);

    // Reload the page to apply the new locale
    location.reload();
  }
}
