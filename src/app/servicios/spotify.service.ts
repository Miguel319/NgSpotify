import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getNuevosLanzamientos() {
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQBF29X0m6zvLu9ICOQbMnhhmGR2aE6JcZ4Bdr1YJHpW2TNj2in8iQpJ16R3sm3Mrm8RD1F-vjNurlgaOPA"
    });

    return this.http.get("https://api.spotify.com/v1/browse/new-releases", {
      headers
    });
  }
}
