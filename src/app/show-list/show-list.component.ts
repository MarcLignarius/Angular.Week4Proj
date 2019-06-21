import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShowService } from '../show.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css'],
  providers: [ShowService]
})

export class ShowListComponent implements OnInit {
  constructor(private router: Router, private showService: ShowService){}
  filterByCategory: string = "all";
  shows: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  ngOnInit(){
    this.shows = this.showService.getShows();
  }

  goToShowDetail(clickedShow) {
    this.router.navigate(['show-detail', clickedShow.$key]);
  }

  goToShowEdit(clickedShow) {
    this.router.navigate(['show-edit', clickedShow.$key]);
  }

  onSelect(category) {
    this.filterByCategory = category;
  }
}

// new Show('flyer.jpg', 'NOFX', 'Portland Meadows', '07/12/2019 | 08:00 pm', 45, '21+'),
// new Show('flyer.jpg', 'Nile', 'Hawthorne Theater', '11/22/2019 | 07:30 pm', 25, 'All Ages'),
// new Show('flyer.jpg', 'Gojira', 'Roseland Theater', '07/29/2019 | 08:30 pm', 25, 'All Ages'),
