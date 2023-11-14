import { Component, Input } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { GameStateService } from '../../shared/services/state/game-state.service';
import { Observable, map } from 'rxjs';
import { CharactersConfig, LevelConfig } from '../../shared/config';

interface ViewModel {
    name: string;
    player: string;

    portrait: string;

    gold: number;
    level: number;
}

@Component({
    selector: 'app-character-view',
    templateUrl: './character-view.component.html',
    styleUrls: ['./character-view.component.scss'],
    imports: [RxState],
})
export class CharacterViewComponent {
    @Input() characterIdentifier = '';

    viewModel$: Observable<ViewModel> = this.gameState.players$.pipe(
        map((players) =>
            players.find((p) => p.id === this.characterIdentifier)
        ),
        map((character) => {
            if (!character || !this.characterIdentifier) {
                throw new Error(
                    `no character by name ${this.characterIdentifier} to display`
                );
            }

            return {
                player: character.player,
                name: CharactersConfig.getCharacterData(
                    this.characterIdentifier,
                    'name'
                ),
                portrait: CharactersConfig.getCharacterData(
                    this.characterIdentifier,
                    'portrait'
                ),
                gold: character.gold,
                level:
                    LevelConfig.getCharacterLevelFromExperience(
                        character.experience
                    ) ?? 0,
            };
        })
    );

    constructor(private readonly gameState: GameStateService) {}

    onScroll(event: any) {
        console.log(event);
    }
}
