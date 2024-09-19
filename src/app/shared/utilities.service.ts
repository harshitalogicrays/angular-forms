import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
snackBar:MatSnackBar = inject(MatSnackBar)
showSnackBar(msg: string, duration: number = 2000, p0?: string){
  this.snackBar.open(msg,'Close',{
    duration:duration,horizontalPosition:'right',verticalPosition:'bottom'
  })
}

}
