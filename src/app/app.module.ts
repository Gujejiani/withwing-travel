import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeComponent } from './containers/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material/material.module';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderBannerComponent } from './components/header/header-banner/header-banner.component';
import { SliderComponent } from './components/slider/slider.component';
import { SliderIntroComponent } from './components/slider/slider-intro/slider-intro.component';
import { SliderArrowsComponent } from './components/slider/slider-arrows/slider-arrows.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { DestinationItemComponent } from './components/destinations/destination-item/destination-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';
import { FormWrapperComponent } from './ui/form-wrapper/form-wrapper.component';
import { InputComponent } from './ui/form-wrapper/input/input.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomeComponent,
    HeaderComponent,
    HeaderBannerComponent,
    SliderComponent,
    SliderIntroComponent,
    SliderArrowsComponent,
    DestinationsComponent,
    DestinationItemComponent,
    FooterComponent,
    FormComponent,
    FormWrapperComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FontAwesomeModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
