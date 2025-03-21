import { Injectable } from '@angular/core';
import { EnumIconType } from '@shared/enums/enum-icon-type';

/**
 * Serviço de assets
 *
 * @description Serviço responsável por fornecer a URL completa de um assets, com base no nome do asset e do tipo de asset desejado.
 */
@Injectable({
  providedIn: 'root',
})
export class AssetsService {
  /** Caminho base das imagens */
  private readonly assetsPath = `../../../../assets/icons/`;

  /**
   * Função responsável por retornar a URL completa de um ícone, com base no nome
   * do ícone e do tipo de ícone desejado.
   *
   * @param {string} iconName Nome do ícone
   * @param {EnumIconType} [iconType=EnumIconType.SVG] Extensão do ícone
   *
   * @default EnumIconType.SVG
   *
   * @returns {string} URL completa do ícone = `../../../../assets/icons/icon.svg`
   *
   * @example this.assetsService.searchIcon('icon')
   * @example this.assetsService.searchIcon('icon', EnumIconType.PNG)
   */
  public searchIcon(
    iconName: string,
    iconType: EnumIconType = EnumIconType.SVG
  ): string {
    return `${this.assetsPath}${iconName}.${iconType}`;
  }
}
