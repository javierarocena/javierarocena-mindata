import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  loadingMessage: string | undefined;

  setLoading(message: string | undefined) {
    this.loadingMessage = message;
  }
}
