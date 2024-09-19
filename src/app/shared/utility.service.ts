import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  snackBar: MatSnackBar=inject(MatSnackBar)

  showSnackBar(msg: string, duration: number = 3000,type: 'success' | 'error' | 'info' = 'info'): void {
    let panelClass = '';
    switch (type) {
      case 'success':
        panelClass = 'custom-snackbar-success';
        break;
      case 'error':
        panelClass = 'custom-snackbar-error';
        break;
      case 'info':
        panelClass = 'custom-snackbar-info';
        break;
    }

    this.snackBar.open(msg, 'Close', {
      duration: duration,
      horizontalPosition: 'center',  
      verticalPosition: 'bottom',   
      panelClass: [panelClass]
    });
  }
}
