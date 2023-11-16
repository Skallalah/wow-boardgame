import { Component, Input } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { GameStateService } from '../../shared/services/state/game-state.service';
import { Faction } from '../../shared/entities';
import { Observable, map } from 'rxjs';

interface ViewModel {
    characterIdentifiers: string[];
}

@Component({
    selector: 'app-faction-view',
    templateUrl: './faction-view.component.html',
    styleUrls: ['./faction-view.component.scss'],
    providers: [RxState],
})
export class FactionViewComponent {
    @Input() faction: Faction | undefined;

    viewModel$: Observable<ViewModel> = this.gameState.players$.pipe(
        map((players) => {
            return {
                characterIdentifiers: players
                    .filter((p) => p.faction === this.faction)
                    .map((player) => player.id),
            };
        })
    );

    constructor(private readonly gameState: GameStateService) {}
}
