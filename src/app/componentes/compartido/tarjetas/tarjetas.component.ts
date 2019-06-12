import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-tarjetas",
  templateUrl: "./tarjetas.component.html",
  styleUrls: ["./tarjetas.component.css"]
})
export class TarjetasComponent implements OnInit {
  @Input() valores: any[];

  constructor(private router: Router) {}

  ngOnInit() {
    this.valores = [];
  }

  verArtista(valor: any) {
    let artistaId = valor.item === "artist" ? valor.id :
     valor.artists[0].id;

     this.router.navigate(['/artista', artistaId]);
  }
}
