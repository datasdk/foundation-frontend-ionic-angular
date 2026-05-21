# Foundation Frontend Ionic Angular

Foundation er et Ionic Angular frontend-projekt, der kan køre som web-app og som native Android/iOS-app via Capacitor.

## Installer dependencies

```bash
npm install
```

Projektet er sat op med Capacitor 8:

- `@capacitor/core` og `@capacitor/cli`
- `@capacitor/android` og `@capacitor/ios`
- Splash Screen, Status Bar, Screen Orientation, Network, Device og App
- Capacitor Cookies via `CapacitorCookies` i `capacitor.config.ts`
- Capacitor Assets via `@capacitor/assets`

## Web-udvikling

```bash
npm start
```

Build:

```bash
npm run build
```

Angular bygger den danske app til `www/da`, som er sat som Capacitor `webDir`.

## Capacitor-kommandoer

```bash
npm run cap:add:android
npm run cap:add:ios
npm run cap:assets
npm run cap:sync
npm run cap:open:android
npm run cap:open:ios
```

Brug den samlede sync-kommando, når web-build, assets eller plugins er ændret:

```bash
npm run mobile:sync
```

## Splash screens og app icons

Kilde-filerne ligger her:

```text
src/assets/app/icons
src/assets/app/splashscreens
```

Generer native ikoner og splash screens:

```bash
npm run cap:assets
```

`cap:assets` kører først `scripts/prepare-capacitor-assets.mjs`, som samler filerne fra `icons` og `splashscreens` i `src/assets/app/.capacitor-assets`. Derefter kører `capacitor-assets generate --assetPath src/assets/app/.capacitor-assets`.

De forventede kildefiler er:

```text
src/assets/app/icons/icon.png
src/assets/app/icons/icon-only.png
src/assets/app/icons/icon-foreground.png
src/assets/app/icons/icon-background.png
src/assets/app/splashscreens/splash.png
src/assets/app/splashscreens/splash-dark.png
```

## Android-app

Tilføj Android-projektet første gang:

```bash
npm run cap:add:android
```

Byg og sync:

```bash
npm run mobile:sync
```

Åbn Android Studio:

```bash
npm run cap:open:android
```

## iOS-app

Tilføj iOS-projektet første gang:

```bash
npm run cap:add:ios
```

Byg og sync:

```bash
npm run mobile:sync
```

Åbn Xcode på macOS:

```bash
npm run cap:open:ios
```

## Deep links

Deep links er forberedt fra start.

Understøttede indgange:

```text
foundation://home
https://datas.dk/home
https://www.datas.dk/home
```

Angular håndterer links i `src/core/services/deep-link.service.ts` via Capacitor `App.addListener('appUrlOpen', ...)`.

Android-konfigurationen ligger i:

```text
android/app/src/main/AndroidManifest.xml
```

iOS-konfigurationen ligger i:

```text
ios/App/App/Info.plist
ios/App/App/App.entitlements
```

Domænerne `datas.dk` og `www.datas.dk` skal også have en gyldig `apple-app-site-association` og Android `assetlinks.json`, når de endelige app-signeringer er kendt.

## Dokumentation

PDF-guiden ligger i:

```text
docs/capacitor-guide.pdf
```

Kilde-dokumentet ligger i:

```text
docs/capacitor-guide.md
```

Regenerer PDF:

```bash
npm run docs:pdf
```

## Typisk arbejdsgang

```bash
npm install
npm run build
npm run cap:add:android
npm run cap:add:ios
npm run cap:assets
npm run cap:sync
```

Efter første platform-tilføjelse:

```bash
npm run mobile:sync
```

## Support

For support og yderligere ressourcer:

https://datas.dk

## License

This project is proprietary and intended for use within the Datas ecosystem.
