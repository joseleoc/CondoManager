import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsLayoutPageRoutingModule } from './tabs-layout-routing.module';

import { TabsLayoutPage } from './tabs-layout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsLayoutPageRoutingModule
  ],
  declarations: [TabsLayoutPage]
})
export class TabsLayoutPageModule {}
