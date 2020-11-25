import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
//import { addSintomas } from './addSintomas';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'Sintomas',
    //component: addSintomas
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
