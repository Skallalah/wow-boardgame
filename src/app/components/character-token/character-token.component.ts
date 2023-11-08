import { Component, HostBinding, Input } from '@angular/core';
import { CharactersConfig } from '../../shared/config';
import { FactionEnum } from '../../shared/entities';
import { ColorConfig } from '../../shared/config/color.config';

@Component({
    selector: 'app-character-token',
    templateUrl: './character-token.component.html',
    styleUrls: ['./character-token.component.scss'],
})
export class CharacterTokenComponent {
    @Input() characterIdentifier: string | undefined;

    get image() {
        return this.characterIdentifier
            ? CharactersConfig.getCharacterData(
                  this.characterIdentifier,
                  'portrait'
              )
            : '';
    }

    @HostBinding('style.--faction-color')
    private get value(): string {
        const faction = this.characterIdentifier
            ? CharactersConfig.getCharacterData(
                  this.characterIdentifier,
                  'faction'
              )
            : '';

        return faction === FactionEnum.Alliance
            ? ColorConfig.ALLIANCE
            : ColorConfig.HORDE;
    }

    constructor() {}
}
