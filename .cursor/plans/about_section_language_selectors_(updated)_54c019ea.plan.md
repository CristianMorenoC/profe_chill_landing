---
name: About Section Language Selectors (Updated)
overview: Refactor the About section to replace the side profile image with two full-feature, animated language selector components positioned below the text.
todos:
  - id: branch
    content: Create new branch feature/about-language-selectors
    status: pending
  - id: refactor-const
    content: Extract languages constant to src/utils/constants.ts
    status: pending
    dependencies:
      - branch
  - id: create-component
    content: Create LanguageProfileSelector.tsx from AboutProfile.tsx
    status: pending
    dependencies:
      - refactor-const
  - id: i18n
    content: Add translation keys for selector titles
    status: pending
  - id: update-about
    content: Update About.astro with new layout and components
    status: pending
    dependencies:
      - create-component
      - i18n
  - id: cleanup
    content: Delete old AboutProfile.tsx if unused
    status: pending
    dependencies:
      - update-about
---

# Plan: About Section Language Selectors

## 1. Branch Creation

- Create and switch to a new branch: `feature/about-language-selectors`

## 2. Refactor Language Data

- Move the `languages` array configuration from [`src/components/AboutProfile.tsx`](src/components/AboutProfile.tsx) to a new shared file [`src/utils/constants.ts`](src/utils/constants.ts).
- This ensures a single source of truth.

## 3. Genericize AboutProfile Component

- Rename `AboutProfile.tsx` to [`src/components/LanguageProfileSelector.tsx`](src/components/LanguageProfileSelector.tsx).
- Update props to accept:
    - `title`: string (to display the "Choose..." text).
    - `allowedLanguageIds`: string[] (to filter which languages are shown).
    - `defaultLanguageId`: string (optional).
- Logic:
    - Filter the `languages` constant based on `allowedLanguageIds`.
    - Use the first allowed language as default if not specified.
    - Preserve all animation logic ("curtain" effect).
    - Display the `title` above the component if provided.

## 4. Update Translations

- Add new keys to [`src/i18n/en.json`](src/i18n/en.json) and [`src/i18n/es.json`](src/i18n/es.json):
    - `learnLanguageTitle`: "Choose the language you wanna learn"
    - `classLanguageTitle`: "Choose the language you wanna receive your class"

## 5. Implement New Layout in About Section

- Modify [`src/components/About.astro`](src/components/About.astro).
- Remove the existing 2-column grid layout (`grid-cols-2`).
- Make the text content full width.
- Remove the old `<AboutProfile />` usage.
- Add a new container below the text for the two selectors.
    - **Row 1**: `<LanguageProfileSelector />`
        - Title: "Choose the language you wanna learn"
        - Allowed: `['en', 'es']`
    - **Row 2**: `<LanguageProfileSelector />`
        - Title: "Choose the language you wanna receive your class"
        - Allowed: `['en', 'es', 'pt', 'it', 'fr']`
- Ensure adequate spacing between rows (`gap-12` or similar).

## 6. Verify

- Check that both components animate independently.
- Check responsive behavior (they should stack nicely).
- Verify correct languages are shown in each selector.