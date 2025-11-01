import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { LoggingService } from './services/loggingservice';
import { TestLoggingService } from './services/testloggingservice';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    // voorbeeld van kiezen welke loggingservice er moet geïnjecteerd worden (dependency injection)
    {provide: LoggingService, useClass: TestLoggingService}
  ]
};
