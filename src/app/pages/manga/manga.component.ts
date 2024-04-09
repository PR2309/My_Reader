import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-manga',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './manga.component.html',
  styleUrl: './manga.component.css'
})
export class MangaComponent {

}
