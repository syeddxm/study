import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';


@NgModule({
    imports: [
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatGridListModule,
        MatProgressBarModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatButtonToggleModule,
        MatInputModule
    ],
    exports: [
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatGridListModule,
        MatProgressBarModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatButtonToggleModule,
        MatInputModule
    ],
    providers: [ MatIconRegistry],
})

export class MaterialModule {
    constructor(
        public matIconRegistry: MatIconRegistry) {
        matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    }
}
