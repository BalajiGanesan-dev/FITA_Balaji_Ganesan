import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContainerComponent } from './container/container.component';
import { ResizerDirective } from './resizer.directive';
import { DailyNeedsComponent } from './daily-needs/daily-needs.component';
import { HomeEssentialsComponent } from './home-essentials/home-essentials.component';
import { SnacksComponent } from './snacks/snacks.component';
import { BeautyCareComponent } from './beauty-care/beauty-care.component';
import { BabyCareComponent } from './baby-care/baby-care.component';
import { KitchenEssentialsComponent } from './kitchen-essentials/kitchen-essentials.component';
import {Smiley} from './pipes';
import { PopupComponent } from './common/popup/popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SampleChildComponent } from './sample-child/sample-child.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    ContainerComponent,
    ResizerDirective,
    DailyNeedsComponent,
    HomeEssentialsComponent,
    SnacksComponent,
    BeautyCareComponent,
    BabyCareComponent,
    KitchenEssentialsComponent,
    Smiley,
    PopupComponent,
    SampleChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
