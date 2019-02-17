import {NgModule} from '@angular/core';
import {MatBadgeModule, MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule} from '@angular/material';

@NgModule({
  imports: [MatBadgeModule, MatToolbarModule, MatButtonModule, MatIconModule,  MatSidenavModule],
  exports: [MatToolbarModule, MatBadgeModule, MatToolbarModule, MatIconModule, MatSidenavModule]
  }
)
export class MaterialModule {}




