import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ChoicesComponent } from '../../components/choices/choices.component';
// import { manga } from '../../../assets/Manga/manga';

@Component({
  selector: 'app-manga',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    NavbarComponent,
    FooterComponent,
    ChoicesComponent,
  ],
  templateUrl: './manga.component.html',
  styleUrl: './manga.component.css',
})
export class MangaComponent {
  // manga = manga;
}
