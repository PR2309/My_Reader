import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AboutComponent } from './pages/about/about.component';
import { MangaComponent } from './pages/manga/manga.component';
import { NovelsComponent } from './pages/novels/novels.component';
import { MusicComponent } from './pages/music/music.component';
import { TechComponent } from './pages/tech/tech.component';

export const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent },
  {path: 'login', component: LoginComponent },
  {path: 'signup', component: SignupComponent},
  {path: 'about', component: AboutComponent},
  {path: 'manga', component: MangaComponent},
  {path: 'novels', component: NovelsComponent},
  {path: 'music', component: MusicComponent},
  {path: 'tech', component: TechComponent}
];
