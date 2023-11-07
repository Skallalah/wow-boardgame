import { Injectable } from '@angular/core';
import { RxState } from '@rx-angular/state';

import { Character } from '../entities/character.entity';

interface GameState {
    turn: number;

    // game settings
    coop: boolean;
    pvpEnding: boolean;
    dungeoneering: boolean;
    deadlyPvP: boolean;

    // players
    player_1: Character;
}

@Injectable({
    providedIn: 'root',
})
export class GameStateService extends RxState<GameState> {
    constructor() {
        super();
    }
}
