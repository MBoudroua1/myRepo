import {NgModule} from '@angular/core';
import {
  MatBadgeModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatTabsModule} from '@angular/material';


@NgModule({
  imports: [
    MatBadgeModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule],
  exports: [MatToolbarModule, MatBadgeModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatTabsModule]
  }
)
export class MaterialModule {}




