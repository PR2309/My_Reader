import { Component, inject } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
// import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
// import { Firestore, doc,setDoc } from '@angular/fire/firestore';
import { FormGroup, FormsModule, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    FooterComponent,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  signupForm!: FormGroup;
  disable: boolean = false;

  ngOnInit() {
    this.setForm();
    if (!this.signupForm.valid) {
      this.disable = true;
    }
  }
  constructor(private _router: Router) {}

  setForm(){
    this.signupForm = new FormGroup({
      name: new FormControl('',[Validators.required, Validators.minLength(2)]),
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      cpassword: new FormControl('',[Validators.required])
    });
  }

  validatePassword(password: string , confirmPassword: string){

    if(password !== confirmPassword){
      alert("Passwords do not match. Please re-enter your password.");
      return false;
    }

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
    const mail = this.signupForm.value['email'];
    const pass = this.signupForm.value['password'];
    const cpass = this.signupForm.value['cpassword'];
    console.log(mail, pass);

    if (this.validatePassword(pass,cpass) && this.validateMail(mail)) {
      alert('Login Successful!!!');
      this._router.navigate(['login']);
    }
  }

  
  // constructor(private router: Router) {}

  // private auth: Auth = inject(Auth);
  // private firestore: Firestore = inject(Firestore);
  // username: string = '';
  // email: string = '';
  // password: string = '';
  // confrimpassword: string = '';
  // async register(event: Event) {
  //   event.preventDefault();
  //   await createUserWithEmailAndPassword(this.auth, this.email, this.password)
  //     .then(async (userCredential) => {
  //       console.log('User registered successfully', userCredential.user);
  //       await setDoc(
  //         doc(this.firestore, 'users', userCredential.user.uid),
  //         {
  //           username: this.username,
  //           email: this.email,
  //         },
  //         { merge: true }
  //       );
  //     })
  //     .then(() => {
  //       console.log('User data saved successfully');
  //       /* send to home page */
  //       this.router.navigate(['/home']);
  //     })
  //     .catch((error) => {
  //       console.error('Error registering user', error);
  //     });
  // }
}
