# Project Context: Nevado Trek Landing Page

This document provides a comprehensive overview of the Nevado Trek landing page project, including its structure, architecture, and the functionalities that have been implemented.

## 1. Project Overview

The project is a single-page landing page for a travel agency named "Nevado Trek". The page is designed to showcase the agency's tours, services, and company information. It was originally built on Webflow and exported as a static HTML file with all assets hosted on a CDN.

## 2. Project Structure

The current project structure is as follows:

```
D:\Nevado Trek Development\test-2\
├───css\
│   ├───custom.css
│   └───nevado-trek-e4497d.webflow.shared.f242acfb1.css
├───js\
│   ├───gsap.min.js
│   ├───jquery-3.5.1.min.dc5e7f18c8.js
│   ├───language.js
│   ├───ScrollTrigger.min.js
│   ├───SplitText.min.js
│   ├───webfont.js
│   ├───webflow.ba79d5f8.10b6f388c285a0fb.js
│   ├───webflow.schunk.2c4c4ac4a76bfa1a.js
│   ├───webflow.schunk.4c2c4fe8222a5934.js
│   └───webflow.schunk.6c669f8d627d0abb.js
├───en.json
├───es.json
├───index.html
├───method.md
└───.qodo\
```

## 3. Initial State

The project started as a single `index.html` file with all its CSS and JavaScript dependencies hosted on external CDNs (Content Delivery Networks), primarily from Webflow's CDN and Google Fonts.

## 4. Local Asset Migration

The first major change was to make the project self-contained by downloading all external assets and linking them locally. This process is documented in detail in the `method.md` file and can be summarized as follows:

1.  **Identification of Assets**: All external CSS and JavaScript files were identified from the `<link>` and `<script>` tags in `index.html`.
2.  **Creation of Local Directories**: `css` and `js` directories were created to store the downloaded assets.
3.  **Downloading Assets**: Each CSS and JavaScript file was downloaded from its CDN URL using a PowerShell command (`Invoke-WebRequest`) and saved to the corresponding local directory.
4.  **Updating `index.html`**: The `href` and `src` attributes in the `<link>` and `<script>` tags were updated to point to the local file paths.

## 5. Language Switcher Implementation

A language switcher was added to the header to allow users to toggle between English and Spanish content. This functionality was implemented through the following steps:

1.  **UI Implementation**: A simple language switcher with "ES" and "EN" links was added to the header of the `index.html` file, next to the contact button.
2.  **Text Extraction**: All translatable text from the `index.html` file was identified and marked with a `data-i18n` attribute. The Spanish and English versions of the text were then extracted into `es.json` and `en.json` files, respectively.
3.  **Switching Logic**: A new JavaScript file, `js/language.js`, was created to handle the language switching. This script fetches the appropriate JSON file based on the user's selection, updates the content of the elements with `data-i18n` attributes, and stores the user's language preference in the browser's local storage for persistence.

## 6. Layout Bug Fixing

After implementing the language switcher, a layout issue was identified in the marquee section when the language was switched to Spanish. The longer Spanish text caused the text to wrap and overlap, breaking the marquee effect. The following steps were taken to resolve this issue:

1.  **Problem Analysis**: The root cause of the issue was identified as a `min-width` property on the marquee text elements that was too large for the Spanish text, combined with a fixed-width parent container.
2.  **Initial Attempts**: Several solutions were attempted, including reducing the font size, using `white-space: nowrap`, and increasing the container width. These solutions were either rejected by the user or did not fully resolve the issue.
3.  **Final Solution**: The final solution was to override the `min-width` property of the marquee text elements by adding `min-width: auto !important;` to the `css/custom.css` file. This allowed the text containers to resize properly, accommodating the longer Spanish text without breaking the layout or changing the font size.
