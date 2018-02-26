import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';




@NgModule({
    imports: [MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatGridListModule],
    exports: [MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatGridListModule],
    providers: [ MatIconRegistry],
})

export class MaterialModule {
    constructor(
        public matIconRegistry: MatIconRegistry) {
        matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    }
}
