import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntroComponent } from './pages/intro/intro.component';
import { CampaniesComponent } from './pages/campanies/campanies.component';
import { ServicesSectionComponent } from './pages/services-section/services-section.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    IntroComponent,
    CampaniesComponent,
    ServicesSectionComponent,
    TestimonialsComponent,
    PortfolioComponent,
    FaqComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
