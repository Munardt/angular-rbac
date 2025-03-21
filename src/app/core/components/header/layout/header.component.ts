import { Component, OnInit } from '@angular/core';
import { AssetsService } from '@shared/services/assets/assets.service';

/**
 * Header component
 *
 * @description Componente responsável por controlar o header do projeto, onde nela
 * é possível alterar o tema e navegar entre as páginas disponíveis no projeto.
 *
 * @implements `OnInit` - Dispara as lógicas de inicialização do componente
 *
 * @example <app-header></app-header>
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: false,
})
export class HeaderComponent implements OnInit {
  /** Booleano que controla o tema aplicado ao projeto */
  public isLightTheme: boolean = false;

  private readonly themeKey: string = 'rbac-theme';

  /** Caminho da imagem do icone do slide toggle para o tema claro */
  public readonly lightModeIcon: string =
    this.assetsService.searchIcon('light_mode');

  /** Caminho da imagem do icone do slide toggle para o tema escuro */
  public readonly darkModeIcon: string =
    this.assetsService.searchIcon('dark_mode'); //'@assets/icons/dark_mode.svg';

  /**
   * Responsável por injetar os serviço no componente
   * @param {AssetsService} assetsService Serviço de assets
   */
  constructor(private readonly assetsService: AssetsService) {}

  /**
   * Responsável por disparar a lógica de verificação do tema assim que o
   * componente for inicializado.
   */
  ngOnInit(): void {
    this.verifyTheme();
  }

  /**
   * Verifica se o tema está salvo no localStorage e altera o tema
   * do projeto com base nessa informação.
   *
   * @description
   * Essa função é responsável por verificar se o tema está salvo
   * no localStorage e, com base nessa informação, alterar o tema
   * do projeto. Se o tema for 'light', ele adiciona a classe
   * 'light-theme' no elemento HTML, caso contrário, ele remove.
   * Além disso, ele altera o valor do booleano `isLightTheme` para
   * true ou false, de acordo com o tema.
   */
  private verifyTheme(): void {
    localStorage.getItem(this.themeKey) === 'light'
      ? document.documentElement.classList.add('light-theme')
      : document.documentElement.classList.remove('light-theme');

    this.isLightTheme = localStorage.getItem(this.themeKey) === 'light';
  }

  /**
   * Método responsável por alterar o booleano que controla o tema
   * e alterar o tema do projeto.
   *
   * @example
   * toggleTheme()
   */
  public toggleTheme() {
    this.isLightTheme = !this.isLightTheme;
    const rootElement: HTMLElement = document.documentElement;
    localStorage.setItem(this.themeKey, this.isLightTheme ? 'light' : 'dark');
    if (this.isLightTheme) rootElement.classList.add('light-theme');
    else rootElement.classList.remove('light-theme');
  }
}
