import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/core/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

 loginForm = this.fb.group({
    loginId: [''],
    password: ['']
  });

  constructor(
    private fb: FormBuilder,
    private auth: AdminService,
    private router: Router
  ) {}

  submit() {
  console.log('👉 Login form value:', this.loginForm.value);

  this.auth.login(this.loginForm.value).subscribe({
    next: (res) => {
      console.log('✅ Login success:', res);
      localStorage.setItem('admin', JSON.stringify(res));
      this.router.navigate(['/admin-dashboard']);
    },
    error: (err) => {
      console.error('❌ Login error:', err);
      alert('Invalid username or password');
    }
  });
}

}
