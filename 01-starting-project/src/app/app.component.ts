import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";

import { DUMMY_USERS } from '../dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUsername: string = "";

  onSelectUser(id: string) {
    console.log(`Selected user with id ${id}`);
    const selectedUser = DUMMY_USERS.find(user => user.id == id);
    
    this.selectedUsername = selectedUser?.name ?? "";
  }
}
