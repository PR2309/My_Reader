import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-choices',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './choices.component.html',
  styleUrl: './choices.component.css'
})
export class ChoicesComponent {

  // pdfs = [
  //   { title: 'PDF 1', pdfUrl: 'path/to/pdf1.pdf' },
  //   { title: 'PDF 2', pdfUrl: 'path/to/pdf2.pdf' },
  //   { title: 'PDF 3', pdfUrl: 'path/to/pdf3.pdf' }
  // ];

  // selectPdf(pdfUrl: string) {
  //   // Handle selected PDF
  //   console.log('Selected PDF:', pdfUrl);
  // }
  // selectedPdf: any;

  // showPopup(event: MouseEvent, pdf: any) {
  //   this.selectedPdf = pdf;
  //   const popup = document.querySelector('.popup') as HTMLElement;
  //   popup.style.display = 'block';
  //   popup.style.top = `${event.clientY}px`;
  //   popup.style.left = `${event.clientX}px`;
  // }

  // hidePopup() {
  //   this.selectedPdf = null;
  //   const popup = document.querySelector('.popup') as HTMLElement;
  //   popup.style.display = 'none';
  // }

  
}
