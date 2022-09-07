import { PlacesService } from './../../services/places.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  dataToApi: any = [];

  constructor(private service: PlacesService) {}

  ngOnInit() {
    this.service.get().subscribe((data: any) => {
      this.dataToApi = data.map(({ name, image }: any) => {
        return {
          image,
          thumbImage: image,
          title: name,
          alt: name,
        };
      });
    });
  }

  shuffle(array: any[]): any[] {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
}
