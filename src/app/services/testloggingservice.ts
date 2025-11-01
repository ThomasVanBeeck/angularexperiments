import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestLoggingService {
  log(msg: string): void {
    console.log(`TEST LoggingService: ${msg}`)
  }
}
