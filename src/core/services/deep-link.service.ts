import { Injectable, NgZone, inject } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class DeepLinkService {
  private readonly router = inject(Router);
  private readonly zone = inject(NgZone);
  private initialized = false;

  initialize(): void {
    if (this.initialized || !Capacitor.isNativePlatform()) {
      return;
    }

    this.initialized = true;

    App.addListener('appUrlOpen', ({ url }) => {
      const appPath = this.toAppPath(url);

      if (!appPath) {
        return;
      }

      this.zone.run(() => {
        void this.router.navigateByUrl(appPath);
      });
    });
  }

  private toAppPath(url: string): string | null {
    try {
      const parsedUrl = new URL(url);

      if (parsedUrl.protocol === 'foundation:') {
        return parsedUrl.pathname || '/home';
      }

      if (parsedUrl.hostname === 'datas.dk' || parsedUrl.hostname === 'www.datas.dk') {
        return parsedUrl.pathname || '/home';
      }
    } catch {
      return null;
    }

    return null;
  }
}
