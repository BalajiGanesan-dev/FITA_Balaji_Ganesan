import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BabyCareComponent } from './baby-care/baby-care.component';
import { BeautyCareComponent } from './beauty-care/beauty-care.component';
import { DailyNeedsComponent } from './daily-needs/daily-needs.component';
import { HomeEssentialsComponent } from './home-essentials/home-essentials.component';
import { KitchenEssentialsComponent } from './kitchen-essentials/kitchen-essentials.component';
import { SnacksComponent } from './snacks/snacks.component';
import { RestrictCopyPasteDirective } from './restrict-copy-paste.directive';
import { RestrictCopyPasteComponent } from './restrict-copy-paste/restrict-copy-paste.component';


const routes: Routes = [
  {path:'baby-care',component:BabyCareComponent},
  {path:'beauty-care',component:BeautyCareComponent},
  {path:'daily-needs',component:DailyNeedsComponent},
  {path:'home-essentials',component:HomeEssentialsComponent},
  {path:'kitchen-essentials',component:KitchenEssentialsComponent},
  {path:'snacks',component:SnacksComponent},
  {path:'restrict-copy-paste', component:RestrictCopyPasteComponent},
  {path:'restrict-copy-paste',component:RestrictCopyPasteDirective}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
