import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './app/pages/home/home.component';
import { HeaderComponent } from './app/components/header/header.component';
import { AboutComponent } from './app/components/about/about.component';
import { SkillsComponent } from './app/components/skills/skills.component';
import { ExperienceComponent } from './app/components/experience/experience.component';
import { ProjectsComponent } from './app/components/projects/projects.component';
import { ContactComponent } from './app/components/contact/contact.component';
import { FooterComponent } from './app/components/footer/footer.component';
import { ScrollRevealDirective } from './directives/scroll-reveal.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    ScrollRevealDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
