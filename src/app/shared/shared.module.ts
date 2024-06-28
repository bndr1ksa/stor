import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],

  //هنا وضعت الهيدر اكسبورت لكي استطيع الوصل له من اي مكان
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
