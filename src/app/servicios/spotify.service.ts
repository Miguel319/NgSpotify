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
        "Bearer BQDtGtJrW1A0pVQJrTNMc2e5Q5dm38rbJ_Bv0D6jc1m7dLLE1l6UEw7uu9WC3OpEWkCjreKJaAadqEqoxn4"
    });

    this.http
      .get("https://api.spotify.com/v1/browse/new-releases", { headers })
      .subscribe(data => console.log(data));
  }
}
