import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class UtilService {
  constructor(private _router: Router) {}

  public onOpenLink(url: string): Window | boolean {
    return url && typeof url === 'string'
      ? window.open(url, '_blank', 'noopener noreferrer')
      : false;
  }

  public redirectToUrl(url: string): Window | boolean {
    return url && typeof url === 'string'
      ? window.open(url, '_self', 'noopener noreferrer')
      : false;
  }

  public navigateTo(url: string, params?: NavigationExtras) {
    this._router.navigate([url], params ?? {});
  }

  public getCurrentRoute(): string {
    return this._router.url;
  }
}
