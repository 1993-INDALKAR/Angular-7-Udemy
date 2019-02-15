import { Injectable } from '@angular/core';
import { CountServiceService } from '../countService/count-service.service';

@Injectable()
// ({
//   providedIn: 'root'
// })
export class UsersServiceService {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private countService:CountServiceService){

  }

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.countService.activateCount();
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.countService.inactivateCount();
  }

  
}
