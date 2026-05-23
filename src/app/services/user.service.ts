import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersKey = 'users';
  private apiUrl = 'http://localhost:8086/users'; 
  constructor() {}

  
  getUsers(): User[] {
    const usersJson = localStorage.getItem(this.usersKey);
    return usersJson ? JSON.parse(usersJson) : [];
  }

  
  saveUser(user: User): void {
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem(this.usersKey, JSON.stringify(users));
  }

  getUserByCredentials(userName: string, password: string): User | undefined {
    const users = this.getUsers();
    return users.find(user => user.userName === userName && user.password === password);
  }

  
  userExists(userName: string): boolean {
    const users = this.getUsers();
    return users.some(user => user.userName === userName);
  }
}
