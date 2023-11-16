import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelTrackerComponent } from './level-tracker/level-tracker.component';
import { CharacterTokenComponent } from './character-token/character-token.component';
import { CharacterViewComponent } from './character-view/character-view.component';
import { FactionViewComponent } from './faction-view/faction-view.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        LevelTrackerComponent,
        CharacterTokenComponent,
        CharacterViewComponent,
        FactionViewComponent,
        CounterComponent,
    ],
    exports: [LevelTrackerComponent, FactionViewComponent, CounterComponent],
    imports: [CommonModule, FormsModule, SharedModule],
})
export class ComponentsModule {}
