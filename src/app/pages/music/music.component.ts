import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-music',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,RouterLink,RouterLinkActive],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})

export class MusicComponent {

  /*myForm : FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      rememberMe: [false]
    }, { validator: this.confirmPasswordValidator });
  }

  confirmPasswordValidator(control: FormGroup) {
    const password =control.get("password")?.value;
    const confirmPassword = control.get("confirmPassword")?.value;

    if (password !== confirmPassword) {
      return { passwordsDontMatch: true };
    }
    return null;
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form submitted!', this.myForm.value);
      const formData = {
        password: this.myForm.get('password').value,
        rememberMe: this.myForm.get('rememberMe').value
      };
      // Submit the form data to your backend (including rememberMe value)
    } else {
      console.error('Form is invalid!');
    }
  }
*/
  // myForm: FormGroup;

  // constructor(private fb: FormBuilder) {}

  // ngOnInit() {
  //   this.myForm = this.fb.group({
  //     name: ['', [Validators.required, Validators.minLength(3)]],
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required, Validators.minLength(8)]],
  //     confirmPassword: ['', Validators.required]
  //   }, { validator: this.confirmPasswordValidator });
  // }

  // confirmPasswordValidator(control: FormGroup) {
  //   const password = cont.get('password').value;
  //   const confirmPassword = control.get('confirmPassword').value;

  //   if (password !== confirmPassword) {
  //     return { passwordsDontMatch: true };
  //   }
  //   return null;
  // }

  // onSubmit() {
  //   if (this.myForm.valid) {
  //     console.log('Form submitted!', this.myForm.value);
  //     // Submit the form data to your backend
  //   } else {
  //     console.error('Form is invalid!');
  //   }
  // }
}
