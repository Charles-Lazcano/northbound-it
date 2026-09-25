# NorthBound IT

Marketing website for NorthBound IT, a managed service provider (MSP).

**Live:** https://charles-lazcano.github.io/northbound-it/

Built with React + Vite. The hero background is a WebGL shader (`src/components/GhostFibers.jsx`) rendered with [ogl](https://github.com/oframe/ogl).

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # serve the production build
```

## Todo

- Wire the contact form (`ContactForm` in `src/App.jsx`) to a real endpoint
- Replace placeholder phone number and email
- Add real logo, testimonials, and service-area details

## Deployment

Hosted on GitHub Pages from the `gh-pages` branch. To redeploy, run `npm run build` and push the contents of `dist/` to `gh-pages`. The `base` in `vite.config.js` matches the repo name; change it to `/` if the site moves to a custom domain.
