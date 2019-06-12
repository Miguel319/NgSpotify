import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "src/app/servicios/spotify.service";

@Component({
  selector: "app-busqueda",
  templateUrl: "./busqueda.component.html",
  styleUrls: ["./busqueda.component.css"]
})
export class BusquedaComponent implements OnInit {
  artistas: any[];
  cargando: boolean;

  constructor(private spotify: SpotifyService) {}

  ngOnInit() {
    this.artistas = [];
  }

  buscar(termino: string) {
    this.spotify.getArtistas(termino).subscribe((res: any) => {
      this.cargando = true;
      console.log(res);
      this.artistas = res;
      this.cargando = false;
    });
  }
}
