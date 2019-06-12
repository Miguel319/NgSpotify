import { Routes } from "@angular/router";
import { PrincipalComponent } from "./componentes/principal/principal.component";
import { BusquedaComponent } from "./componentes/busqueda/busqueda.component";
import { ArtistaComponent } from './componentes/artista/artista.component';

export const routes: Routes = [
  { path: "principal", component: PrincipalComponent },
  { path: "busqueda", component: BusquedaComponent },
  { path: "artista/:id", component: ArtistaComponent },
  { path: "", pathMatch: "full", redirectTo: "principal" },
  { path: "**", pathMatch: "full", redirectTo: "principal" }
];
