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
  mejoresCanciones: any[];

  constructor(
    private router: ActivatedRoute,
    private spotify: SpotifyService
  ) {}

  ngOnInit() {
    this.artista = {};
    this.mejoresCanciones = [];
    this.router.params.subscribe((res: any) => {
      this.getArtista(res["id"]);
      this.getMejoresCanciones(res['id']);
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
  
  getMejoresCanciones(id: string) {
    this.spotify.getMejoresCanciones(id)
      .subscribe(
        (res: any) => {
          console.log(res);
          this.mejoresCanciones = res;
        }
      )
  }

}
