import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: false,
})
export class FooterComponent {
  /** Pega o ano atual e apresenta no footer, para não criar a necessidade de alteração manual todo ano */
  public year = new Date().getFullYear();
}
