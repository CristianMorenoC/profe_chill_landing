# Project Overview

This is a modern, multilingual landing page for "Profe Chill," a corporate Spanish/English language training service. The project is built using the Astro framework, with React for interactive components and Tailwind CSS for styling. It is a statically generated site with a strong focus on performance, SEO, and accessibility.

**Key Features:**

*   **Multilingual:** Supports English and Spanish, with content managed through JSON files.
*   **Component-Based Architecture:** The UI is built with a combination of Astro and React components.
*   **Dark Mode:** Includes a dark mode toggle with persistent state using `localStorage`.
*   **Responsive Design:** Mobile-first design implemented with Tailwind CSS.
*   **Interactive UI:** Features interactive elements like accordions, carousels, and modals.
*   **SEO Optimized:** The project is set up with SEO in mind, including meta tags and a clear URL structure.

## Building and Running

### Development

To run the development server, use the following command:

```bash
npm run dev
```

This will start the server on `http://localhost:4321`.

### Build

To build the project for production, use the following command:

```bash
npm run build
```

The output will be generated in the `dist/` directory.

### Preview

To preview the production build locally, use the following command:

```bash
npm run preview
```

## Development Conventions

*   **Styling:** Styling is done using Tailwind CSS. Customizations are located in `tailwind.config.mjs`.
*   **Components:** Components are located in the `src/components` directory. Astro components (`.astro`) are used for static content, while React components (`.tsx`) are used for interactive elements.
*   **Internationalization (i18n):** All text content is managed through JSON files in the `src/i18n` directory. The `src/utils/i18n.ts` file contains the logic for handling translations.
*   **Pages:** The main pages are located in the `src/pages` directory. The routing is configured in `astro.config.mjs`.
*   **Code Formatting:** The project uses Prettier for code formatting. It is recommended to use the VS Code extension to ensure consistent formatting.
*   **Commits:** There are no explicit commit conventions, but it is recommended to follow conventional commit standards.
