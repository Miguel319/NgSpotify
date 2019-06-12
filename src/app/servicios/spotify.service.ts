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
        "Bearer BQDZBs-Rndn1E9i9Pd9fmpJFW4YWUJzCu6aiddvkPDL-kzHu1wftAcJmld5Cxv2ge-2PFAv9tRKK5XYDHu4"
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
}
