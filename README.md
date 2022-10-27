# Bluff's Little Thinkers

<img src="lighthouse-score.png" align="right"
     alt="AstroWind Lighthouse Score" width="100" height="358">

**BLT** childcare and learning center in Sergeant Bluff Iowa.
306 1st St #3
Sergeant Bluff, IA
51054

## Features

- ✅ Built for SSR with **Astro JS** ([@astro.build](https://astro.build)).
- ✅ Integration with **Tailwind CSS** ([@astrojs/tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind/)).
- ✅ **Image optimization** ([@astrojs/images](https://docs.astro.build/en/guides/integrations-guide/image/)).
- ✅ Generation of **project sitemap** based on your routes ([@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)).
- ✅ **Open Graph tags** for social media sharing
- ✅ **Fonts optimization** at build time ([subfont](https://www.npmjs.com/package/subfont)).
- ✅ **Production-ready** scores in [Lighthouse](https://web.dev/measure/) and [PageSpeed Insights](https://pagespeed.web.dev/) reports

<br>

<img src="./screenshot.png" alt="Bluff's Little Thinkers Site Screenshot">

<br>

### Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:3000`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

<br>

### Configuration

Basic configuration file: `./src/config.mjs`
To add Google Analytics:

```javascript
export const SITE = {
  name: "Bluff's Little Thinkers",

  origin: "https://bluffslittlethinkers.com",

  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  googleSiteVerificationId: false // or some value,
};

```

<br>

### Deploy

#### Deploy to production (manual)

Create an optimized production build with:

```shell
npm run build
```

Now, your website is ready to be deployed. All generated files are located at
`dist` folder, which you can deploy the folder to any hosting service you
prefer.

<br>

### License

**Bluff's Little thinkers** © Virgos Design 2022
