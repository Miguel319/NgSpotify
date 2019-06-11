import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getConsulta(consulta: string) {
    const url = `https://api.spotify.com/v1/${consulta}`;

    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQAdFs8ea9p5zL9OI-eZxzdlXIDsCCWP7IuaC2QmThcXBJ_Wlr0J9_i-yGhVZzeyzkE_TeYqTiM3otWzx2g"
    });
    return this.http.get(url, { headers });
  }

  getNuevosLanzamientos() {
    return this.getConsulta("browse/new-releases?limit=20").pipe(
      map(data => data["albums"].items)
    );
  }

  getArtista(termino: string) {
    return this.getConsulta(`search?q=${termino}&type=artist&limit=15`).pipe(
      map(data => data["artists"].items)
    );
  }
}
