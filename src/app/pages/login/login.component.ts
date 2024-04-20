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
import { DashboardComponent } from '../dashboard/dashboard.component';
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
  disable: boolean=false;
  ngOnInit() {
    this.setForm();
    if(this.loginForm.valid){this.disable=true;}
    
  }
  constructor(private _router: Router){}

  setForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required]),
    });
  }
  submit() {
      // console.log(this.loginForm.value);
      if(this.loginForm.valid){
      // console.log(this.loginForm.valid);
      alert("Login Successful!!!");
      this._router.navigate(['home']);
      } else{
        // console.log(this.loginForm.valid);
        alert("Please fill all fields correctly");
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
