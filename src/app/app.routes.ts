import {RouterModule ,Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContattiComponent } from './components/contatti/contatti/contatti.component';
import { NgModule } from '@angular/core';
import path from 'path';
import { UserComponent } from './components/user-components/user/user.component';
import { DetailComponent } from './components/detail/detail/detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormUserComponent } from './components/form-user/form-user.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { EsercizioReactFormComponent } from './components/esercizio-react-form/esercizio-react-form.component';
export const routes: Routes = [
    {path:"", redirectTo:"/home", pathMatch:"full"},
    {path: "home", component: HomepageComponent},
    {path: "contact", component: ContattiComponent},
    {path: "user", component: UserComponent},
    {path: "form", component: FormUserComponent},
    {path:'dettagli/:id', component: DetailComponent },
    {path: "reactive-form", component: ReactiveFormComponent},
    {path: "esreactive", component: EsercizioReactFormComponent},
    {path: "**", component:PageNotFoundComponent},
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}