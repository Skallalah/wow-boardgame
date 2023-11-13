import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';
import { GameStateService } from './services/state/game-state.service';
import { DataReaderService } from './services/data/data-reader.service';

@NgModule({
    declarations: [PageNotFoundComponent, WebviewDirective],
    imports: [CommonModule, TranslateModule, FormsModule],
    exports: [
        TranslateModule,
        WebviewDirective,
        FormsModule,
        GameStateService,
        DataReaderService,
    ],
})
export class SharedModule {}
