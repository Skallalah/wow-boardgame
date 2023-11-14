import { Injectable } from '@angular/core';
import { RxState } from '@rx-angular/state';

import { Character, Class, Faction } from '../../entities/character.entity';
import { selectSlice } from '@rx-angular/state/selections';
import { map } from 'rxjs';

interface GameState {
    turn: number;

    // game settings
    coop: boolean;
    pvpEnding: boolean;
    dungeoneering: boolean;
    deadlyPvP: boolean;

    // players
    player_1: Character;
    players: Character[];

    // events
}

@Injectable({
    providedIn: 'root',
})
export class GameStateService extends RxState<GameState> {
    private readonly INIT_CONFIG: Partial<GameState> = {
        turn: 0,

        coop: false,
        pvpEnding: true,
        dungeoneering: false,
        deadlyPvP: false,

        // TODO: remove testing values
        player_1: {
            id: 'paladin',
            player: 'Lenny',
            faction: Faction.Alliance,
            class: Class.Paladin,
            experience: 4,
            gold: 5,
        },
        players: [],
    };

    readonly players$ = this.select(selectSlice(['player_1'])).pipe(
        map(({ player_1 }) => [
            player_1,
            player_1,
            player_1,
            player_1,
            player_1,
            player_1,
        ])
    );

    constructor() {
        super();

        this.set(this.INIT_CONFIG);
    }
}
