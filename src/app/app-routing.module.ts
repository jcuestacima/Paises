import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './shared/pages/homePage/homePage.component';
import { AboutPage } from './shared/pages/aboutPage/aboutPage.component';
import { ContactPage } from './shared/pages/contactPage/contactPage.component';

const routes: Routes = [

  // {
  //   path:'about',
  //   component: AboutPage
  // },{
  //   path:'contact',
  //   component: ContactPage
  // }
  {
    path:'countries',
    loadChildren: ()=> import('./countries/countries.module').then(m=>m.CountriesModule)  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
