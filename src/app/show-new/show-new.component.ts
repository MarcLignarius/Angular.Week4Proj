import { Component, OnInit } from '@angular/core';
import { ShowService } from '../show.service';
import { Show } from '../models/show.model';

@Component({
  selector: 'app-show-new',
  templateUrl: './show-new.component.html',
  styleUrls: ['./show-new.component.css'],
  providers: [ShowService]
})

export class ShowNewComponent {
  constructor(private showService: ShowService) { }

  submitForm(flyer: string, bands: string, venue: string, date: string, price: number, ageLimit: string, category: string) {
    var newShow: Show = new Show(flyer, bands, venue, date, price, ageLimit, category);
    this.showService.addShow(newShow);
  }

}
