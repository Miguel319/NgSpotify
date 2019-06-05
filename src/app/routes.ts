import { Routes } from "@angular/router";
import { PrincipalComponent } from "./componentes/principal/principal.component";
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';

export const routes: Routes = [
  { path: "principal", component: PrincipalComponent },
  { path: "busqueda", component: BusquedaComponent },
  { path: "", pathMatch: "full", redirectTo: "principal" },
  { path: "**", pathMatch: "full", redirectTo: "principal" }
];
