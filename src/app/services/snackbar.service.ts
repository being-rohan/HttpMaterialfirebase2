import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _matsanck: MatSnackBar) { }


  matsancopen(msg: string) {
    this._matsanck.open(msg, 'close', {
      duration: 15000,
      horizontalPosition: 'center'
    })
  }
}
