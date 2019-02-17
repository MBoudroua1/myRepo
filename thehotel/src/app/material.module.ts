import {NgModule} from '@angular/core';
import {MatBadgeModule, MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [MatBadgeModule, MatToolbarModule, MatButtonModule, MatIconModule,  MatSidenavModule, MatListModule, FlexLayoutModule],
  exports: [MatToolbarModule, MatBadgeModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, FlexLayoutModule]
  }
)
export class MaterialModule {}




