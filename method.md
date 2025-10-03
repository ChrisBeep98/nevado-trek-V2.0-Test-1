# Protocol for Localizing CDN Assets

This document outlines the method used to download CSS and JavaScript files from a Content Delivery Network (CDN) and link them locally in an HTML file.

## 1. Identify and List All CDN Assets

The first step is to manually inspect the `index.html` file and identify all external resources being loaded from a CDN. These are found in `<link>` tags for CSS and `<script>` tags for JavaScript.

Example from the original `index.html`:
```html
<link href="https://cdn.prod.website-files.com/68cb38dfbae5b4c56edac13a/css/nevado-trek-e4497d.webflow.shared.f242acfb1.css" rel="stylesheet" type="text/css" />
<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
```

## 2. Create Local Directories

Create `css` and `js` directories in the root of the project to store the downloaded files.

```bash
mkdir css
mkdir js
```

## 3. Download CDN Files

Using a shell command like `Invoke-WebRequest` (for PowerShell), download each file into the appropriate local directory. It's important to use a User-Agent string to mimic a browser request, as some CDNs may block requests without one.

Example command:
```powershell
powershell -command "Invoke-WebRequest -Uri 'https://domain.com/path/to/file.css' -OutFile 'css/file.css' -UserAgent 'Mozilla/5.0'"
```
This process should be repeated for every CSS and JavaScript file identified in step 1.

## 4. Update `index.html`

Finally, update the `href` and `src` attributes in the `<link>` and `<script>` tags in `index.html` to point to the local files.

For example, the links from step 1 would be changed to:
```html
<link href="css/nevado-trek-e4497d.webflow.shared.f242acfb1.css" rel="stylesheet" type="text/css" />
<script src="js/webfont.js" type="text/javascript"></script>
```
After completing these steps, the project will no longer depend on external CDNs for its core assets.
