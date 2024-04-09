import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-novels',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './novels.component.html',
  styleUrl: './novels.component.css'
})
export class NovelsComponent {

}
