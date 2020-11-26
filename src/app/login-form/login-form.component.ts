import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/_services/auth.service';
import { TokenStorageService } from 'app/_services/token-storage.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  form: any= {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];


  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) {
    
   }

  ngOnInit(): void {
    if(this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      if(this.roles.includes('ROLE_ADMIN')) {
        this.router.navigateByUrl('/dashboard')
      }
    }
    
  }

  onSubmit(): void {
    this.router.navigateByUrl('/admin')
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        if(this.roles.includes('ROLE_ADMIN')){
          this.router.navigateByUrl('/dashboard')
        }else {
          this.router.navigateByUrl('')
        }
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}
