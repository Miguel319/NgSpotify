import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from "src/app/servicios/spotify.service";

@Component({
  selector: "app-artista",
  templateUrl: "./artista.component.html",
  styleUrls: ["./artista.component.css"]
})
export class ArtistaComponent implements OnInit {
  artista: any;
  cargando: boolean;

  constructor(
    private router: ActivatedRoute,
    private spotify: SpotifyService
  ) {}

  ngOnInit() {
    this.artista = {};
    this.router.params.subscribe((res: any) => {
      this.getArtista(res["id"]);
    });
  }

  getArtista(id: string) {
    this.cargando = true;
    this.spotify.getArtista(id).subscribe(
      res => {
        console.log(res);
        this.artista = res;
        this.cargando = false;
      },
      err => console.log(err)
    );
  }
}
