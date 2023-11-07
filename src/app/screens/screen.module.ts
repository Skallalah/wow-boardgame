import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ScreenRoutingModule } from './screen-routing.module';

@NgModule({
    declarations: [MainMenuComponent],
    imports: [CommonModule, SharedModule, ScreenRoutingModule],
})
export class ScreenModule {}
