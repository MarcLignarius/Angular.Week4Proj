import { Component } from '@angular/core';
import { Show } from './models/show.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shows: Show[] = [
    new Show('NOFX', 'Portland Meadows', '07/12/2019 | 08:00 pm', 45, '21+'),
    new Show('Nile', 'Hawthorne Theater', '11/22/2019 | 07:30 pm', 25, 'All Ages'),
    new Show('Gojira', 'Roseland Theater', '07/29/2019 | 08:30 pm', 25, 'All Ages'),
  ];
  selectedShow = null;
  editShow(clickedShow) {
    this.selectedShow = clickedShow;
  }
  finishedEditing() {
    this.selectedShow = null;
  }
}
