# Sean Hoar's Portfolio

This is my personal portfolio site showcasing my work and skills as a full-stack/front-end developer.

## Technologies Used

- React 18 for UI components
- TypeScript for type safety
- Vite for build tooling
- Tailwind CSS 3.3.5 for styling
- Font Awesome for icons
- GitHub Actions for CI/CD
- GitHub Pages for hosting

## Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Tailwind CSS Configuration

This project uses specific Tailwind CSS versions for compatibility:

```bash
npm install -D tailwindcss@3.3.5 postcss@8.4.31 autoprefixer@10.4.16
```

Since the project uses ESM (`"type": "module"` in package.json), the config files must use the `.cjs` extension:

In `postcss.config.cjs`:
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

In `tailwind.config.cjs`:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#18BC9C',
        secondary: '#2C3E50',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

### Font Handling

When using custom fonts with Tailwind CSS, there are multiple approaches:

1. Define fonts in the Tailwind config:
```javascript
fontFamily: {
  'montserrat': ['Montserrat', 'sans-serif'],
  'lato': ['Lato', 'sans-serif'],
},
```

2. Use standard CSS instead of Tailwind utility classes for fonts:
```css
body {
  font-family: 'Lato', sans-serif;
}
```

3. Use inline styles for components:
```jsx
<h1 style={{ fontFamily: "'Montserrat', sans-serif" }}>Heading</h1>
```

### Asset Handling for Deployment

For proper asset handling with Vite and GitHub Pages:

1. Configure the base path in `vite.config.ts`:
   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: '/portfolio/', // Base path for GitHub Pages at username.github.io/portfolio/
   })
   ```

2. Create an assets module for importing images:
   ```typescript
   // src/assets/index.ts
   import profileImg from './images/IMG_3382.jpg';
   
   export const images = {
     profile: profileImg,
     // Other images...
   };
   ```

3. Use imported images in components:
   ```tsx
   import { images } from '../assets';
   
   // Then in your JSX:
   <img src={images.profile} alt="Profile" />
   ```

This approach ensures assets are properly handled in the build process and correctly referenced in the deployed application.

## Build

To build the production version:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

The site is automatically deployed to GitHub Pages when changes are merged into the `main` branch.

## CI/CD Workflow

This project uses GitHub Actions for continuous integration and deployment:

1. Pull Request workflow (`pull_request.yml`) verifies that the code builds correctly when PRs are created.
2. Deployment workflow (`deploy.yml`) automatically deploys the site to GitHub Pages when changes are merged to main.

## Branch Protection Rules

- New branches must be created from the latest 'main' branch
- Code cannot be directly pushed to 'main'
- All changes require a pull request
- Pull requests require passing status checks before merging

## License

All rights reserved. Copyright © Sean Hoar.