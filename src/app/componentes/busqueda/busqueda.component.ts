import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "src/app/servicios/spotify.service";

@Component({
  selector: "app-busqueda",
  templateUrl: "./busqueda.component.html",
  styleUrls: ["./busqueda.component.css"]
})
export class BusquedaComponent implements OnInit {
  artistas: any[] = [];

  constructor(private spotify: SpotifyService) {}

  ngOnInit() {}

  buscar(termino: string) {
    this.spotify.getArtista(termino).subscribe((res: any) => {
      console.log(res);
      this.artistas = res;
    });
  }
}
