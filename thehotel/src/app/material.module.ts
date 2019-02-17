import {NgModule} from '@angular/core';
import {MatBadgeModule, MatButtonModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [MatBadgeModule, MatToolbarModule, MatButtonModule],
  exports: [MatToolbarModule, MatBadgeModule, MatToolbarModule]
  }
)
export class MaterialModule {}




