import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAdressComponent } from '../components/form/components/form-adress/form-adress.component';
import { FormClientComponent } from '../components/form/components/form-client/form-client.component';
import { FormIdentityComponent } from '../components/form/components/form-identity/form-identity.component';
import { FormComponent } from '../components/form/form.component';
import { ProfileComponent } from '../containers/profile/profile.component';
import { CanActivateGuard } from '../guard/formGuard';

import { HomePageComponent } from '../pages/home-page/home-page.component';

const routes: Routes = [
 { path: '', component: HomePageComponent, children: [{path: 'client-form/client', component: FormComponent,
  children: [{path: '', component: FormClientComponent},
   { path: 'address', component: FormAdressComponent, canActivate:[CanActivateGuard] }, 
   { path: 'identity', component: FormIdentityComponent, canActivate:[CanActivateGuard]}]}]  }
, {
  path: 'created-client', component: ProfileComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
