import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Device } from '@capacitor/device';
import { Network } from '@capacitor/network';
import { ScreenOrientation } from '@capacitor/screen-orientation';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';

@Injectable({
  providedIn: 'root'
})
export class CapacitorPlatformService {
  private initialized = false;

  async initialize(): Promise<void> {
    if (this.initialized) {
      return;
    }

    this.initialized = true;

    if (!Capacitor.isNativePlatform()) {
      return;
    }

    await Promise.all([
      this.runNativeSetup(() => StatusBar.setStyle({ style: Style.Light })),
      this.runNativeSetup(() => StatusBar.setBackgroundColor({ color: '#ffffff' })),
      this.runNativeSetup(() => SplashScreen.hide()),
      this.runNativeSetup(() => ScreenOrientation.orientation()),
      this.runNativeSetup(() => Network.getStatus()),
      this.runNativeSetup(() => Device.getInfo())
    ]);
  }

  private async runNativeSetup(action: () => Promise<unknown>): Promise<void> {
    try {
      await action();
    } catch {
      // Native setup should never prevent the Angular app from booting.
    }
  }
}
