import type { Language } from './translations';

export function getCurrentLanguage(): Language {
  // Check URL parameter first
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam === 'de' || langParam === 'en') {
      return langParam;
    }

    // Check localStorage
    const storedLang = localStorage.getItem('language');
    if (storedLang === 'de' || storedLang === 'en') {
      return storedLang;
    }
  }

  // Default to English
  return 'en';
}

export function setLanguage(lang: Language): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lang);

    // Update URL without reload
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.history.pushState({}, '', url);

    // Reload page to apply new language
    window.location.reload();
  }
}
