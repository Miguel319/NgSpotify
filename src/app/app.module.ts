import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { PrincipalComponent } from "./componentes/principal/principal.component";
import { ArtistaComponent } from "./componentes/artista/artista.component";
import { BusquedaComponent } from "./componentes/busqueda/busqueda.component";
import { NavComponent } from "./componentes/compartido/nav/nav.component";
import { routes } from "./routes";
import { NoimgPipe } from './pipes/noimg.pipe';
import { TarjetasComponent } from './componentes/compartido/tarjetas/tarjetas.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ArtistaComponent,
    BusquedaComponent,
    NavComponent,
    NoimgPipe,
    TarjetasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
