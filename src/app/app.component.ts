import { Component, Input, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

// interface carrusel{
//   imgSrc: string;
//   imgAlt: string;
// }


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, NgbCarouselModule{
  title = 'GuticoClean';
  // @Input() images: carrusel[] = [];
  // selectedIndex = 0;

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

	constructor(){}
  ngOnInit(): void {}

 
}
