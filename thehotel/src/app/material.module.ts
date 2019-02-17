import {NgModule} from '@angular/core';
import {MatBadgeModule, MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule} from '@angular/material';

@NgModule({
  imports: [MatBadgeModule, MatToolbarModule, MatButtonModule, MatIconModule,  MatSidenavModule, MatListModule],
  exports: [MatToolbarModule, MatBadgeModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule]
  }
)
export class MaterialModule {}




