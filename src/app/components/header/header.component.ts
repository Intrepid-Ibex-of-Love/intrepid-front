import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginState: boolean = false;

  constructor(private authService: AuthService) {
    this.loginState = authService.authState();
  }

  ngOnInit(): void {
  }
}
