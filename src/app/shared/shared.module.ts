import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './pages/homePage/homePage.component';
import { AboutPage } from './pages/aboutPage/aboutPage.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactPage } from './pages/contactPage/contactPage.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadingSpinnerComponent } from './components/loadingSpinner/loadingSpinner.component';



@NgModule({
  declarations: [HomePage, AboutPage, SidebarComponent, ContactPage, SearchBoxComponent, LoadingSpinnerComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HomePage,
    AboutPage,
    SidebarComponent,
    ContactPage,
    SearchBoxComponent,
    LoadingSpinnerComponent
  ]
})
export class SharedModule { }
