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
        "Bearer BQAb6OP4gkmMYNNFcrA93qFpCXMmZPDXDyMe27UIsbLGCNoVmEkOw7EoQiyPq0kjR2Sl2nFfxgFMMD2aQ6k"
    });
    return this.http.get(url, { headers });
  }

  getNuevosLanzamientos() {
    return this.getConsulta("browse/new-releases?limit=20").pipe(
      map(data => data["albums"].items)
    );
  }

  getArtistas(termino: string) {
    return this.getConsulta(`search?q=${termino}&type=artist&limit=15`).pipe(
      map(data => data["artists"].items)
    );
  }

  getArtista(id: string) {
    return this.getConsulta(`artists/${id}`);
    /*.pipe(
      map(data => data["artists"].items)
    );*/
  }

  getMejoresCanciones(id: string) {
    return this.getConsulta(`artists/${id}/top-tracks?country=us`).pipe(
      map(data => data["tracks"])
    );
  }
}
