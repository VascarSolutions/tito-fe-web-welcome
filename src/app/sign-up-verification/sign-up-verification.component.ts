import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../service/auth.service'

@Component({
  selector: 'app-sign-up-verification',
  templateUrl: './sign-up-verification.component.html',
  styleUrls: ['./sign-up-verification.component.scss'],
})
export class SignUpVerificationComponent implements OnInit {
  loading = true;
  title = 'Thank you!';
  msg = `You're all set to enjoy Tito!`;
  constructor(
    private rutaActiva: ActivatedRoute,
    private authServ: AuthService
  ) {
    this.verifyToken();
  }

  ngOnInit() {}

  verifyToken() {
    this.rutaActiva.params.subscribe(async (params) => {
      window.history.replaceState(null, '', '/')
      if(params.token) {
        try {
          this.authServ.activateAccount(params.token, params.userId).subscribe(res => {
            this.loading = false
            if(!res.status) {
              this.title = 'Error!';
              this.msg = res.message;
            }
          })
        } catch (error) {
          this.loading = false
          this.title = 'Error!'
          this.msg = 'There has been an error, please try again!';    
        }
      } else {
        this.loading = false
        this.title = 'Error!';
        this.msg = 'Invalid Data!';
      }
    });
  }
}
