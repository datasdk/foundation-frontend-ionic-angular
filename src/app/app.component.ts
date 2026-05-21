import { Component, inject } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CapacitorPlatformService } from '../core/services/capacitor-platform.service';
import { DeepLinkService } from '../core/services/deep-link.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [    
    IonApp, 
    IonRouterOutlet,
    RouterModule,
    CommonModule
  ],
})
export class AppComponent {
  private readonly capacitorPlatform = inject(CapacitorPlatformService);
  private readonly deepLinks = inject(DeepLinkService);

  constructor() {
    this.capacitorPlatform.initialize();
    this.deepLinks.initialize();
  }
}
