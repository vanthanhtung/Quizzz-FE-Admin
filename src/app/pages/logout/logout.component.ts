import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'app/_services/token-storage.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private tokenService: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
  }

  logOut() {
    this.tokenService.signOut();
    this.router.navigateByUrl("/login");

}

cancel(){
    this.router.navigateByUrl("");
}

}
