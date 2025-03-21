import { Component } from '@angular/core';

/**
 * Footer component
 *
 * @description Componente responsável por controlar o footer do projeto, onde é
 * exibido o detentor do projeto e o ano atual com declaração de direitos autorais.
 *
 * @example <app-footer></app-footer>
 */
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
