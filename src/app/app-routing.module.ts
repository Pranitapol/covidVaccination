import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  {path: '', component: FrontpageComponent},
  {path: 'home', component: HomeComponent},
  {
    path: 'pincode', component: FormsComponent
  },
  {path: 'location', component: LocationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
