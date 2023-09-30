import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

/** Service used to apply loader every time call API */
@Injectable({
  providedIn: 'root'
})
export class BusyService {
  /** count of request */
  busyRequestCount = 0;

  constructor(private spinnerService: NgxSpinnerService) { }
  /**
   * used to show spinner
   */
  busy() {
    this.busyRequestCount++;
    this.spinnerService.show();
  }
  /**
   * used to hide spinner
   */
  idle() {
    this.busyRequestCount--;
    if (this.busyRequestCount <= 0) {
      this.busyRequestCount = 0;
      this.spinnerService.hide();
    }
  }
}
