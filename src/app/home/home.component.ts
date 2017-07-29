import { Component, OnInit } from '@angular/core';
import { AlertService, AuthenticationService } from '../_services/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
  <button [routerLink] = "['details',1]">Home</button>
<button [routerLink] = "['details',2]">Services</button>
<button [routerLink] = "['details',3]">New Enquiry</button>
<button [routerLink] = "['details',4]">Complaint Register</button>
<button [routerLink] = "['details',5]">Feedback</button>
<button [routerLink] = "['details',6]">Contact Us</button>
<button (click)="logout()" style="float:right;margin-right:20px;">Logout</button>
  <div class="col-md-12" style="min-height:485px">
  <h1>Welcome to our cleaning service portal.</h1>

</div>

  `,
  styleUrls: []
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }
  logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

}
