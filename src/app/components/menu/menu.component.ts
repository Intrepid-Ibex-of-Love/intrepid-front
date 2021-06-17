import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  constructor(private router: Router, private auth : AuthService) {}

  ngOnInit(): void {
  }

  logOut = (): void => {
    window.localStorage.clear();
    this.auth.logOut();
    this.router.navigate(['']);

  }
}