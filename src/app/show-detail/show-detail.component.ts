import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Show } from '../models/show.model';
import { ShowService } from '../show.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css'],
  providers: [ShowService]
})

export class ShowDetailComponent implements OnInit {
  showId: string;
  showToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private showService: ShowService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.showId = (urlParameters['id']);
    });
    this.showService.getShowById(this.showId).subscribe(dataLastEmittedFromObserver => {
      this.showToDisplay = new Show (
        dataLastEmittedFromObserver.flyer,
        dataLastEmittedFromObserver.bands,
        dataLastEmittedFromObserver.venue,
        dataLastEmittedFromObserver.date,
        dataLastEmittedFromObserver.price,
        dataLastEmittedFromObserver.ageLimit,
        dataLastEmittedFromObserver.category
      )
    })
  }

  goBackToShop() {
    this.router.navigate(['']);
  }

}
