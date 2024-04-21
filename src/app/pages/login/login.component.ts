import { Component, inject } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import {
  FormGroup,
  FormControl,
  FormsModule,
  // NgModel,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
// import { Firestore, doc, getDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    FooterComponent,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    // HttpClientModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  // loginform : FormGroup | undefined;
  loginForm!: FormGroup;
  disable: boolean = false;
  ngOnInit() {
    this.setForm();
    if (this.loginForm.valid) {
      this.disable = true;
    }
  }
  constructor(private _router: Router) {}

  setForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  // submit() {
    // // console.log(this.loginForm.value);
    // if (this.loginForm.valid) {
    //   // console.log(this.loginForm.valid);
    //   // alert('Login Successful!!!');
    //   console.log(this.loginForm);
    //   this._router.navigate(['home']);
    // } else {
    //   // console.log(this.loginForm.valid);
    //   alert('Please fill all fields correctly');}
    // }
    validatePassword(password: string) {
      if (password.length < 6) {
        alert( 'Password must be at least 6 characters long.');
        return false;
      }
  
      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      const hasNumber = /[0-9]/.test(password);
      const hasSpecialChar = /[^a-zA-Z0-9 ]/.test(password);
  
      if (!hasUpperCase) {
        alert('Password must contain at least one uppercase letter.');
        return false;
      }
  
      if (!hasLowerCase) {
        alert('Password must contain at least one lowercase letter.');
        return false;
      }
  
      if (!hasNumber) {
        alert('Password must contain at least one number.');
        return false;
      }
  
      if (!hasSpecialChar) {
        alert('Password must contain at least one special character.');
        return false;
      }
  
      return true;
    }
    validateMail(email: string) {
      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
      const b = emailRegex.test(email);
      console.log(b);
      if(!b) {
        alert("Invaild Email!");
      }
      return b;
    }
    submit() {
      const mail = this.loginForm.value['email'];
      const pass = this.loginForm.value['password'];
      console.log(mail, pass);
  
      if (this.validatePassword(pass) && this.validateMail(mail)) {
        alert('Login Successful!!!');
        this._router.navigate(['home']);
      }
    }

  // email : string = '';
  // password : string = '';
  // constructor(private http:HttpClient) {}
  // async login(event:Event){
  //   event.preventDefault();
  //   // console.log(this.email, this.password);
  //   const datas = {email: this.email, password: this.password};
  //   this.http.post("http://localhost:3000/login",{datas}).subscribe((data)=>{
  //     console.log(data);
  //   });
  // }

  // constructor(private router: Router) {}

  // private auth: Auth = inject(Auth);
  // private firestore: Firestore = inject(Firestore);
  // username: string = '';
  // email: string = '';
  // password: string = '';
  // confrimpassword: string = '';

  // async login(event: Event) {
  //   event.preventDefault();
  //   await signInWithEmailAndPassword(this.auth, this.email, this.password)
  //     .then(() => {
  //       console.log('User logged in successfully');
  //       this.router.navigate(['/home']);
  //     })
  //     .catch((error) => {
  //       console.error('Error logging in user', error);
  //     });
  // }
}
