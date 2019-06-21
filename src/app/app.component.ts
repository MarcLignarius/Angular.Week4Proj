import { Component } from '@angular/core';
import { Show } from './models/show.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedShow = null;
  masterShowList: Show[] = [
    new Show('NOFX, Bad Religion, MxPx', 'Portland Meadows', '07/12/2019 | 08:00 pm', 45, '21+'),
    new Show('Nile, Terrorizer', 'Hawthorne Theater', '11/22/2019 | 07:30 pm', 25, 'All Ages'),
    new Show('Gojira, TBA', 'Roseland Theater', '07/29/2019 | 08:30 pm', 25, 'All Ages'),
  ];
  editShow(clickedShow) {
    this.selectedShow = clickedShow;
  }
  finishedEditing() {
    this.selectedShow = null;
  }
}
