import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelTrackerComponent } from './level-tracker/level-tracker.component';
import { CharacterTokenComponent } from './character-token/character-token.component';
import { CharacterViewComponent } from './character-view/character-view.component';
import { FactionViewComponent } from './faction-view/faction-view.component';

@NgModule({
    declarations: [
        LevelTrackerComponent,
        CharacterTokenComponent,
        CharacterViewComponent,
        FactionViewComponent,
    ],
    exports: [LevelTrackerComponent, FactionViewComponent],
    imports: [CommonModule],
})
export class ComponentsModule {}
