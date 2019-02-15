import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';
import { UsersServiceService } from '../usersService/users-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();

  constructor(private userService:UsersServiceService){

  }

  ngOnInit(){
    // this.users = this.userService.inactiveUsers;
  }

  onSetToActive(id: number) {
    // this.userSetToActive.emit(id);

    this.userService.onSetToActive(id);
  }
}
