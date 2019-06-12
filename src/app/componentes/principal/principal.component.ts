import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SpotifyService } from "src/app/servicios/spotify.service";

@Component({
  selector: "app-principal",
  templateUrl: "./principal.component.html",
  styleUrls: ["./principal.component.css"]
})
export class PrincipalComponent implements OnInit {
  nuevosLanzamientos: any[] = [];
  cargando: boolean;

  constructor(private spotify: SpotifyService) {}

  ngOnInit() {
    this.cargando = true;

    this.spotify.getNuevosLanzamientos().subscribe((res: any) => {
      this.nuevosLanzamientos = res;
      this.cargando = false;
    });
  }
}
