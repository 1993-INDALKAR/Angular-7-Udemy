import { Injectable } from '@angular/core';

@Injectable()
// ({
//   providedIn: 'root'
// })
export class CountServiceService {

  activecount: number = 0;
  inactivecount: number = 0;

  constructor() { }

  activateCount() {
    this.activecount++;
    console.log("Active Count is:" + this.activecount);
  }

  inactivateCount() {
    this.inactivecount++;
    console.log("Inactive Count is:" + this.inactivecount);
  }


}
