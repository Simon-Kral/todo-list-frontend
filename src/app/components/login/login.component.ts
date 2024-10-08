import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  authService = inject(AuthService);
  router = inject(Router);

  async login() {
    try {
      let resp: any = await this.authService.loginWithUsernameAndPassword(
        this.username,
        this.password
      );
      console.log(resp);
      localStorage.setItem('token', resp.token);

      this.router.navigateByUrl('/todos');
    } catch (e) {
      console.error(e);
    }
  }
}
