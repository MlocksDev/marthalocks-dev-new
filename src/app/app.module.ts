import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntroComponent } from './pages/intro/intro.component';
import { CampaniesComponent } from './pages/campanies/campanies.component';
import { ServicesComponent } from './pages/services/services.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { FaqComponent } from './pages/faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    IntroComponent,
    CampaniesComponent,
    ServicesComponent,
    TestimonialsComponent,
    PortfolioComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
