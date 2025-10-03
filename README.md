# Nevado Trek Landing Page

A modern, responsive landing page for Nevado Trek, a Colombian travel agency specializing in Andean mountain tours and expeditions.

## Overview

This project is a single-page application built originally on Webflow and exported as a static HTML site. It showcases Nevado Trek's services, including guided tours to Nevado del Tolima, Cocora Valley, and other high-altitude destinations in the Colombian Andes.

## Features

- **Bilingual Support**: English and Spanish translations with persistent language selection
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by GSAP for scroll-triggered effects and text animations
- **Tour Showcase**: Interactive tour cards with details on duration, altitude, and pricing
- **Testimonials**: Customer reviews with ratings
- **FAQ Section**: Expandable accordion for common questions
- **Social Proof**: TripAdvisor and Colombian Ministry of Commerce certifications

## Project Structure

```
nevado-trek-V2.0-Test-1/
├── index.html              # Main landing page
├── README.md               # This file
├── context.md              # Project development history
├── method.md               # Asset localization documentation
├── en.json                 # English translations
├── es.json                 # Spanish translations
├── css/
│   ├── custom.css          # Custom styles and bug fixes
│   └── nevado-trek-e4497d.webflow.shared.f242acfb1.css  # Main stylesheet
└── js/
    ├── language.js         # Language switching functionality
    ├── gsap.min.js         # Animation library
    ├── ScrollTrigger.min.js # GSAP scroll plugin
    ├── SplitText.min.js    # GSAP text animation plugin
    ├── jquery-3.5.1.min.dc5e7f18c8.js  # jQuery library
    ├── webfont.js          # Google Fonts loader
    └── webflow.*.js        # Webflow interaction scripts
```

## Getting Started

1. Clone or download the repository
2. Open `index.html` in a modern web browser
3. The page is self-contained with all assets included locally

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Responsive design with custom properties
- **JavaScript**: ES6+ for language switching and interactions
- **GSAP**: High-performance animations
- **Webflow**: Original design and export platform

## Development Notes

- All external CDN assets have been localized for offline functionality
- Language preference is stored in browser localStorage
- Custom CSS fixes layout issues with marquee text in different languages
- Project documentation is maintained in `context.md` and `method.md`

## License

© 2025 Nevado Trek. Made by Christian Sandoval.

## Contact

For inquiries about tours or development, visit [nevado-trek.com](https://nevado-trek.com) or contact via the website.