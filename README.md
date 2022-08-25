## Local

To run the development server, run:

```bash
yarn start
```

## Deploy

Generate JSON translation files and upload to Crowdin:

```bash
yarn crowdin:sync
```

Pre-translate via MT in Crowdin and download the translations.

To deploy the site to GitHub Pages, run:

```bash
GIT_USER=HarshadRanganathan yarn deploy
```