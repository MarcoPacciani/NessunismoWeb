import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {NasoComponent} from "./naso/naso.component";
import {NessunoStileComponent} from "./nessuno-stile/nessuno-stile.component";
import {ManagmentComponent} from "./managment/managment.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home",
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "naso",
    component: NasoComponent,
  },
  {
    path: "stile",
    component: NessunoStileComponent,
  },
  {
    path: "video",
    component: ManagmentComponent,
  },
  {
    path: "eCommerce",
    resolve: {
      url: 'https:/www.nessunismo.com',
    },
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
