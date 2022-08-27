import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAdressComponent } from '../components/form-adress/form-adress.component';
import { FormClientComponent } from '../components/form-client/form-client.component';
import { FormIdentityComponent } from '../components/form-identity/form-identity.component';
import { FormComponent } from '../components/form/form.component';

import { HomePageComponent } from '../pages/home-page/home-page.component';

const routes: Routes = [
 { path: '', component: HomePageComponent, children: [{path: 'client-form/client', component: FormComponent,
  children: [{path: '', component: FormClientComponent}, { path: 'address', component: FormAdressComponent}, { path: 'identity', component: FormIdentityComponent}]}]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
