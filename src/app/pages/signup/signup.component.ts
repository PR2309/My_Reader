import { Component, inject } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { from } from 'rxjs';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore, doc,setDoc } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, FooterComponent, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private router: Router) {}
  
  private auth: Auth = inject(Auth);
  private firestore: Firestore = inject(Firestore);
  username: string = '';
  email: string = '';
  password: string = '';
  confrimpassword: string = '';
  async register(event: Event) {
    event.preventDefault();
    await createUserWithEmailAndPassword(this.auth, this.email, this.password)
      .then(async (userCredential) => {
        console.log('User registered successfully', userCredential.user);
        await setDoc(
          doc(this.firestore, 'users', userCredential.user.uid),
          {
            username: this.username,
            email: this.email,
          },
          { merge: true }
        );
      })
      .then(() => {
        console.log('User data saved successfully');
        /* send to home page */
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.error('Error registering user', error);
      });
  }
  
}
