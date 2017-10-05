import { AuthService } from '../shared/auth/auth.service';
import { TokenService } from '../shared/auth/token.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public access: boolean;

  constructor(private token: TokenService, private auth: AuthService) {
    this.access = this.auth.isAuthenticated();
  }
  
  ngOnInit() {
  }

  public login() {        
    this.token.requestToken().subscribe(
      token => { this.access = true },
      err => { this.access = false }
    );
  }
  
  public logout() {
    this.auth.logout();
    this.access = this.auth.isAuthenticated();
  }
}
