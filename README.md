# Miparti Frontend

<div align="center">
  <img src="https://img.shields.io/badge/Gulp-4.0-cf4647?logo=gulp" alt="Gulp 4.0">
  <img src="https://img.shields.io/badge/SASS-1.32-cc6699?logo=sass" alt="SASS">
  <img src="https://img.shields.io/badge/Browser%20Sync-2.27-orange" alt="Browser Sync">
</div>

## 🌍 Demo

Explore the live demo of Miparti Frontend to experience its features firsthand:

- **Live Demo**: [miparti](https://andrey-golubenko.github.io/miparti/)

## 🚀 Features

- **Advanced Build System**
  - SCSS compilation with autoprefixer
  - JavaScript minification and bundling
  - Image and font optimization
  - Live reload development server

- **Integrated Libraries**
  - Slick Carousel for slideshows
  - Magnific Popup for lightboxes
  - Browser-sync for development

## 🛠️ Technology Stack

- **[Gulp](https://gulpjs.com/)** - Task automation
- **[SASS](https://sass-lang.com/)** - CSS preprocessing
- **[Browser-Sync](https://browsersync.io/)** - Live development server
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - CSS vendor prefixing
- **[Uglify](https://github.com/mishoo/UglifyJS)** - JavaScript minification

## 📦 Project Structure

```plaintext
miparti-frontend/
├── app/                    # Source files
│   ├── scss/              # SCSS source files
│   ├── js/                # JavaScript files
│   ├── css/               # Compiled CSS
│   ├── img/               # Image assets
│   ├── fonts/             # Font files
│   └── countries_images/  # Country-specific images
├── dist/                  # Production build
└── node_modules/          # Dependencies
```

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## 💻 Development

Start the development server:
```bash
gulp
```

This will:
- Compile SCSS to CSS
- Bundle and minify JavaScript
- Start a live reload server
- Watch for file changes

## 🏗️ Building for Production

Build the project for production:
```bash
gulp build
```

This creates a `dist` folder with optimized assets.

## 📝 Available Gulp Tasks

- `gulp` - Default task for development
- `gulp scss` - Compile SCSS files
- `gulp js` - Bundle and minify JavaScript
- `gulp build` - Create production build
- `gulp watch` - Watch for file changes
- `gulp clean` - Clean build directory

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
