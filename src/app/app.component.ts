import { Component } from '@angular/core';
import { Show } from './models/show.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shows: Show[] = [
    new Show('[NOFX, Bad Religion]', 'Portland Meadows', '07/12/2019', '$45', '21+'),
    new Show('[Nile, Terrorizer]', 'Hawthorne Theater', '11/22/2019', '$25', 'All Ages'),
    new Show('[Gojira]', 'Roseland Theater', '07/29/2019', '$25', 'All Ages'),
  ];
}
