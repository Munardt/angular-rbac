import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

/**
 * Header component
 *
 * @description Componente responsável por controlar o header do projeto, onde nela
 * é possível alterar o tema e navegar entre as páginas disponíveis no projeto.
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: false,
})
export class HeaderComponent {
  /** Booleano que controla o tema aplicado ao projeto */
  public isDarkTheme: boolean = false;

  public readonly lightModeIcon: string =
    '../../../../assets/icons/light_mode.svg';

  public readonly darkModeIcon: string =
    '../../../../assets/icons/dark_mode.svg';

  /**
   * Método responsável por alterar o booleano que controla o tema
   * e alterar o tema do projeto.
   * @param {MatSlideToggleChange} event Evento do slide toggle
   *
   * @example
   * toggleTheme($event)
   */
  public toggleTheme(event: MatSlideToggleChange): void {
    this.isDarkTheme = event.checked;
    const rootElement = document.documentElement;
    if (this.isDarkTheme) rootElement.classList.add('dark-theme');
    else rootElement.classList.remove('dark-theme');
  }
}
