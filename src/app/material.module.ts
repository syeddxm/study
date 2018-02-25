import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
    imports: [MatButtonModule, MatSidenavModule, MatIconModule],
    exports: [MatButtonModule, MatSidenavModule, MatIconModule],
})

export class MaterialModule { }
