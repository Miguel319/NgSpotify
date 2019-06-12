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
  error: boolean;
  mensaje: string;

  constructor(private spotify: SpotifyService) {}

  ngOnInit() {
    this.cargando = true;
    this.error = false;
    this.spotify.getNuevosLanzamientos().subscribe((res: any) => {
      this.nuevosLanzamientos = res;
      this.cargando = false;
    }, err => {
      this.cargando = false;
      this.error = true;
      this.mensaje = err.error.error.message;
    });
  }
}
