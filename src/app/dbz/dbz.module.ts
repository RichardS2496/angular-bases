import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { DbzListComponent } from './components/dbzList/dbzList.component';
import { DbzFormComponent } from './components/dbzForm/dbzForm.component';
import { TestDecoratorsComponent } from './components/testDecorators/testDecorators.component';
import { SecondTestComponent } from './components/secondTest/secondTest.component';

@NgModule({
  declarations: [
    MainPageComponent,
    DbzListComponent,
    DbzFormComponent,
    TestDecoratorsComponent,
    SecondTestComponent,
  ],
  exports: [MainPageComponent],
  imports: [CommonModule, FormsModule],
})
export class DbzModule {}
