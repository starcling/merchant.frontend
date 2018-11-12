import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/services/authentication.service';
import { User } from '@app/models/User';
import { Router } from '@angular/router';
import { USER_KEY } from '@app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public username: string;
  private localUser: User;
  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    this.localUser = JSON.parse(localStorage.getItem(USER_KEY));
    this.username = this.localUser ? this.localUser.fullName : '';
  }

  public callLogoutFunction(e) {
    e.preventDefault();
    this.authService.logout().subscribe(
      result => {
        this.router.navigate(['/login']);
      },
      error => {
        console.log(error);
      }
    );
  }
}
