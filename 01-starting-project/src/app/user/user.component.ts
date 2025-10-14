import { Component, EventEmitter, Input, Output } from '@angular/core';

interface User {
  id: string;
  name: string;
  avatar: string;
};

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();

  get imageUrl() {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectedUser() {
    this.select.emit(this.user.id);
  }
}
