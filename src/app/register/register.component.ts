import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../shared/authentification.service';
import { RegisterService } from '../shared/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string;
  password: string;
  

  constructor(private router: Router, private registerService: RegisterService) { }

  ngOnInit() {
  }

  registerUser() {
    this.registerService.register(this.username, this.password , this.password)
      .subscribe(result => {
        if (result === true) {
          this.router.navigate(['login']);
        }
      });
}}
