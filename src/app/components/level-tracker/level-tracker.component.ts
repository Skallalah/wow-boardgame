import { Component } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { GameStateService } from '../../shared/services/game-state.service';
import { Observable, map } from 'rxjs';
import { Character } from '../../shared/entities';
import { range } from 'lodash';
import { LevelConfig } from '../../shared/config';

interface ExperiencePointStep {
    level?: number;
    experience: number;
    players: Array<{
        id: string;
    }>;
}

interface ViewModel {
    experiencePointSteps: ExperiencePointStep[];
}

@Component({
    selector: 'app-level-tracker',
    templateUrl: './level-tracker.component.html',
    styleUrls: ['./level-tracker.component.scss'],
    imports: [RxState],
})
export class LevelTrackerComponent {
    viewModel$: Observable<ViewModel> = this.gameState.players$.pipe(
        map((players) => {
            return {
                experiencePointSteps:
                    this.generateExperiencePointSteps(players),
            };
        })
    );

    constructor(readonly gameState: GameStateService) {}

    private generateExperiencePointSteps(
        players: Character[]
    ): ExperiencePointStep[] {
        return range(
            LevelConfig.MIN_EXPERIENCE,
            LevelConfig.MAX_EXPERIENCE + 1
        ).map((experience) => {
            return {
                level: LevelConfig.getLevelFromExperience(experience),
                experience,
                players: players
                    .filter((p) => p.experience === experience)
                    .map((p) => ({ id: p.id })),
            };
        });
    }
}
