import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './../services/product.service';
import { LoginModel } from './../shared/login-model';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  login: LoginModel;

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.login=new LoginModel;
  }

  cancel(): void {
    this.router.navigateByUrl('login')
  }

  onSubmit(): void{
  }

}
