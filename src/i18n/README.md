# Localization System (i18n)

This directory contains the internationalization (i18n) system for the website, supporting English (en) and German (de).

## Files

- `translations.ts` - All translation strings for both languages
- `language.ts` - Utility functions for language management
- `README.md` - This documentation file

## How It Works

### 1. Translation Structure

Translations are organized by section in `translations.ts`:

```typescript
export const translations = {
  en: {
    banner: { title: "..." },
    nav: { projects: "...", myProjects: "...", aboutMe: "..." },
    projects: { ... },
    myProjects: { ... },
    about: { ... }
  },
  de: {
    // Same structure as 'en'
  }
};
```

### 2. Using Translations in Astro Pages

To use translations in your Astro pages:

```astro
---
import { translations, getTranslation } from '../i18n/translations';

// Get current language from URL parameter or localStorage
const urlParams = new URL(Astro.request.url).searchParams;
const lang = (urlParams.get('lang') === 'de' ? 'de' : 'en') as 'en' | 'de';

// Get translations for current language
const t = translations[lang];
---

<h1>{t.banner.title}</h1>
<h2>{t.nav.projects}</h2>
<p>{t.about.paragraph1}</p>
```

### 3. Language Switching

The language buttons in `BaseLayout.astro` handle switching:
- Click "de" button → Sets language to German
- Click "en" button → Sets language to English
- Language is stored in localStorage and URL parameter
- Page reloads to apply new language

### 4. Adding New Translations

To add a new translatable string:

1. Add it to both `en` and `de` sections in `translations.ts`:

```typescript
export const translations = {
  en: {
    newSection: {
      newKey: "English text here"
    }
  },
  de: {
    newSection: {
      newKey: "[DE] German translation needed"
    }
  }
};
```

2. Use it in your Astro page:

```astro
<p>{t.newSection.newKey}</p>
```

## Translation Status

### Completed Translations
- ✅ Navigation labels
- ✅ Section titles
- ✅ Store badge alt text

### Needs Translation (marked with [DE])
All German translations marked with `[DE]` prefix need to be translated:
- eBanking project descriptions
- Frankly project description
- Compendium project descriptions
- Gambly project descriptions
- About Me section paragraphs

### To Translate

Replace all text marked with `[DE]` in the German (`de`) section of `translations.ts` with proper German translations.

**Example:**
```typescript
// Before:
description1: "[DE] After maintaining and adding...",

// After:
description1: "Nachdem wir die alte ZKB eBanking-App gewartet...",
```

## Testing

To test the localization:

1. Open the website: `http://localhost:4321`
2. Click the "de" button in the top-right
3. Page reloads with German translations
4. URL shows: `http://localhost:4321/?lang=de`
5. Click "en" to switch back to English

## Implementation Checklist

- [x] Create translation files
- [x] Set up language switching logic
- [x] Wire up language toggle buttons
- [ ] Translate all German strings (remove [DE] markers)
- [ ] Update index.astro to use translations
- [ ] Test language switching

## Next Steps

1. **Translate German Strings**: Replace all `[DE]` marked strings with actual German translations
2. **Integrate into Pages**: Update `index.astro` to use the translation system
3. **Test**: Verify all translations display correctly in both languages
