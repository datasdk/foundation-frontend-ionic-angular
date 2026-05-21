# Foundation Capacitor guide

Denne guide beskriver den faste arbejdsgang for Foundation-projektet med Ionic, Angular og Capacitor.

## 1. Installer dependencies

Kør:

```bash
npm install
```

Projektet bruger Capacitor 8 med core, CLI, Android, iOS, Splash Screen, Status Bar, Screen Orientation, Network, Device og Capacitor Assets. Cookies er slået til via `CapacitorCookies` i `capacitor.config.ts`.

## 2. Byg web-projektet

Kør:

```bash
npm run build
```

Angular bygger den danske app til `www/da`, som Capacitor bruger som `webDir`.

## 3. Generer app icons og splash screens

Kilde-filerne ligger i:

```text
src/assets/app/icons
src/assets/app/splashscreens
```

Kør:

```bash
npm run cap:assets
```

Scriptet kopierer kilderne til `src/assets/app/.capacitor-assets` og kører derefter `capacitor-assets generate --assetPath src/assets/app/.capacitor-assets`.

## 4. Tilføj Android

Kør første gang:

```bash
npm run cap:add:android
```

Efterfølgende bruges sync:

```bash
npm run mobile:sync
```

Åbn Android Studio:

```bash
npm run cap:open:android
```

## 5. Tilføj iOS

Kør første gang:

```bash
npm run cap:add:ios
```

Efterfølgende bruges sync:

```bash
npm run mobile:sync
```

Åbn Xcode på macOS:

```bash
npm run cap:open:ios
```

## 6. Sync med Capacitor

Når web-build, plugins eller assets er ændret:

```bash
npm run mobile:sync
```

Dette kører build, asset-generering og `cap sync`.

## 7. Deep links

Deep links er forberedt i native projekterne og i Angular:

```text
foundation://home
https://datas.dk/home
https://www.datas.dk/home
```

Android har intent-filter i `android/app/src/main/AndroidManifest.xml`. iOS har URL scheme og associated domains i `ios/App/App/Info.plist` og `ios/App/App/App.entitlements`. Angular lytter på `appUrlOpen` i `src/core/services/deep-link.service.ts`.

## 8. Normal udviklingscyklus

Web:

```bash
npm start
```

Mobil:

```bash
npm run build
npm run cap:assets
npm run cap:sync
```

Åbn derefter Android Studio eller Xcode med kommandoerne ovenfor.
