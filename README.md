# Foundation Frontend Ionic Angular

Foundation is an Ionic Angular frontend project that can run as both a web application and a native Android/iOS application using Capacitor.

## Install Dependencies

```bash
npm install
```

The project is configured with Capacitor 8:

- `@capacitor/core`
- `@capacitor/cli`
- `@capacitor/android`
- `@capacitor/ios`
- Splash Screen
- Status Bar
- Screen Orientation
- Network
- Device
- App
- Capacitor Cookies via `CapacitorCookies` in `capacitor.config.ts`
- Capacitor Assets via `@capacitor/assets`

## Web Development

```bash
npm start
```

Build the project:

```bash
npm run build
```

Angular builds the Danish application into `www/da`, which is configured as the Capacitor `webDir`.

## Capacitor Commands

```bash
npm run cap:add:android
npm run cap:add:ios
npm run cap:assets
npm run cap:sync
npm run cap:open:android
npm run cap:open:ios
```

Use the combined sync command whenever web builds, assets, or plugins are changed:

```bash
npm run mobile:sync
```

## Splash Screens and App Icons

Source files are located here:

```text
src/assets/app/icons
src/assets/app/splashscreens
```

Generate native app icons and splash screens:

```bash
npm run cap:assets
```

`cap:assets` first runs:

```bash
scripts/prepare-capacitor-assets.mjs
```

This script collects all required assets from:

```text
src/assets/app/icons
src/assets/app/splashscreens
```

and prepares them inside:

```text
src/assets/app/.capacitor-assets
```

Afterwards, Capacitor Assets generates the native resources automatically.

Expected source files:

```text
src/assets/app/icons/icon.png
src/assets/app/icons/icon-only.png
src/assets/app/icons/icon-foreground.png
src/assets/app/icons/icon-background.png
src/assets/app/splashscreens/splash.png
src/assets/app/splashscreens/splash-dark.png
```

## Android Application

Add the Android project for the first time:

```bash
npm run cap:add:android
```

Build and sync:

```bash
npm run mobile:sync
```

Open Android Studio:

```bash
npm run cap:open:android
```

## iOS Application

Add the iOS project for the first time:

```bash
npm run cap:add:ios
```

Build and sync:

```bash
npm run mobile:sync
```

Open Xcode on macOS:

```bash
npm run cap:open:ios
```

## Typical Workflow

```bash
npm install
npm run build
npm run cap:add:android
npm run cap:add:ios
npm run cap:assets
npm run cap:sync
```

After the initial platform setup:

```bash
npm run mobile:sync
```

## Support

For support and additional resources:

https://datas.dk

## License

This project is proprietary and intended for use within the Datas ecosystem.