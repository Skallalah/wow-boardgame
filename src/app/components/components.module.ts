import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelTrackerComponent } from './level-tracker/level-tracker.component';
import { CharacterTokenComponent } from './character-token/character-token.component';

@NgModule({
    declarations: [LevelTrackerComponent, CharacterTokenComponent],
    exports: [LevelTrackerComponent],
    imports: [CommonModule],
})
export class ComponentsModule {}
